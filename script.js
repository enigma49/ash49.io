/**
 * Hamza Shaikh — Portfolio Interactive Architecture Demo
 * Multi-Provider Task-Level Failover Router Simulation
 */

(function () {
  'use strict';

  // Dynamic Current Year in Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Simulation Elements
  const btnSimulate = document.getElementById('btn-simulate-failover');
  const statusPulse = document.getElementById('status-pulse');
  const statusText = document.getElementById('status-text');
  const controlStatusDesc = document.getElementById('simulation-status-desc');
  const routerMetric = document.getElementById('router-metric');

  // SVG Nodes
  const nodeOpenAI = document.getElementById('node-openai');
  const nodeAnthropic = document.getElementById('node-anthropic');
  const nodeGoogle = document.getElementById('node-google');

  // SVG Subtext Labels
  const subOpenAI = document.getElementById('sub-openai');
  const subAnthropic = document.getElementById('sub-anthropic');
  const subGoogle = document.getElementById('sub-google');

  // SVG Connection Links
  const linkOpenAI = document.getElementById('link-openai');
  const linkAnthropic = document.getElementById('link-anthropic');
  const linkGoogle = document.getElementById('link-google');

  if (!btnSimulate) return;

  // Provider configuration
  const providers = [
    {
      id: 'openai',
      name: 'OpenAI',
      node: nodeOpenAI,
      sub: subOpenAI,
      link: linkOpenAI,
      primaryLabel: 'Active · Primary',
      standbyLabel: 'Standby · Primary',
      failedLabel: 'Down (HTTP 503)',
      failoverLatency: '340ms'
    },
    {
      id: 'anthropic',
      name: 'Anthropic',
      node: nodeAnthropic,
      sub: subAnthropic,
      link: linkAnthropic,
      primaryLabel: 'Active · Secondary',
      standbyLabel: 'Standby · Secondary',
      failedLabel: 'Down (Rate Limit 429)',
      failoverLatency: '410ms'
    },
    {
      id: 'google',
      name: 'Google',
      node: nodeGoogle,
      sub: subGoogle,
      link: linkGoogle,
      primaryLabel: 'Active · Tertiary',
      standbyLabel: 'Standby · Tertiary',
      failedLabel: 'Down (Timeout 504)',
      failoverLatency: '290ms'
    }
  ];

  // State: 0 = OpenAI Active, 1 = Anthropic Active, 2 = Google Active, 3 = All Failed
  let currentState = 0;
  let isTransitioning = false;

  function updateVisuals(state) {
    // Reset all classes
    providers.forEach((p, idx) => {
      p.node.classList.remove('node-active', 'node-standby', 'node-failed');
      p.link.classList.remove('link-active', 'link-standby', 'link-failed');

      if (idx < state) {
        // Already failed
        p.node.classList.add('node-failed');
        p.link.classList.add('link-failed');
        p.sub.textContent = p.failedLabel;
      } else if (idx === state) {
        // Currently active
        p.node.classList.add('node-active');
        p.link.classList.add('link-active');
        p.sub.textContent = p.primaryLabel;
      } else {
        // Standby
        p.node.classList.add('node-standby');
        p.link.classList.add('link-standby');
        p.sub.textContent = p.standbyLabel;
      }
    });

    if (state === 0) {
      // Normal state
      statusPulse.className = 'status-pulse';
      statusText.textContent = 'Routing state: Primary active (OpenAI)';
      controlStatusDesc.textContent = 'All systems healthy. Click to simulate an upstream OpenAI outage.';
      btnSimulate.textContent = 'Simulate a provider outage';
      if (routerMetric) routerMetric.textContent = 'strategy: latency+health';
    } else if (state === 1) {
      statusPulse.className = 'status-pulse';
      statusText.textContent = 'Failover complete — routed to Anthropic';
      controlStatusDesc.textContent = 'OpenAI outage mitigated. Task redirected to Anthropic in ~340ms.';
      btnSimulate.textContent = 'Simulate Anthropic outage';
      if (routerMetric) routerMetric.textContent = 'fallback: level-1 active';
    } else if (state === 2) {
      statusPulse.className = 'status-pulse';
      statusText.textContent = 'Failover complete — routed to Google';
      controlStatusDesc.textContent = 'Anthropic degraded. Traffic cascaded to Google fallback provider.';
      btnSimulate.textContent = 'Simulate Google outage';
      if (routerMetric) routerMetric.textContent = 'fallback: level-2 active';
    } else if (state >= 3) {
      // All failed
      providers.forEach((p) => {
        p.node.classList.remove('node-active', 'node-standby');
        p.node.classList.add('node-failed');
        p.link.classList.remove('link-active', 'link-standby');
        p.link.classList.add('link-failed');
        p.sub.textContent = p.failedLabel;
      });
      statusPulse.className = 'status-pulse failed';
      statusText.textContent = 'All providers degraded — task-level fallback exhausted';
      controlStatusDesc.textContent = 'All 3 providers simulated down. Circuit breaker engaged.';
      btnSimulate.textContent = 'Reset simulation';
      if (routerMetric) routerMetric.textContent = 'circuit: open (tripped)';
    }
  }

  function handleOutageSimulation() {
    if (isTransitioning) return;

    if (currentState >= 3) {
      // Reset simulation
      currentState = 0;
      updateVisuals(currentState);
      return;
    }

    const failedProvider = providers[currentState];
    const nextState = currentState + 1;

    // Check motion preference for delay
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const failoverDelay = prefersReducedMotion ? 50 : 500;

    isTransitioning = true;
    btnSimulate.disabled = true;

    // Phase 1: Mark current provider down
    failedProvider.node.classList.remove('node-active');
    failedProvider.node.classList.add('node-failed');
    failedProvider.link.classList.remove('link-active');
    failedProvider.link.classList.add('link-failed');
    failedProvider.sub.textContent = failedProvider.failedLabel;

    statusPulse.className = 'status-pulse recovering';
    statusText.textContent = `${failedProvider.name} outage detected — initiating failover...`;
    controlStatusDesc.textContent = `Anomaly detected on ${failedProvider.name}. Selecting next healthy fallback...`;
    if (routerMetric) routerMetric.textContent = 'rerouting in progress...';

    // Phase 2: After ~500ms delay, switch to next provider or fail gracefully
    setTimeout(() => {
      currentState = nextState;
      updateVisuals(currentState);
      isTransitioning = false;
      btnSimulate.disabled = false;
      btnSimulate.focus();
    }, failoverDelay);
  }

  btnSimulate.addEventListener('click', handleOutageSimulation);

  // Initialize initial state
  updateVisuals(0);
})();

