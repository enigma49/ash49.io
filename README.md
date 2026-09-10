# Hamza Shaikh — Portfolio

Personal portfolio and technical showcase for **Hamza Shaikh**, Senior Software Engineer specializing in AI platforms, distributed systems, and cloud infrastructure.

Hosted live on GitHub Pages with zero build step, no framework overhead, and pure static HTML/CSS/JS.

---

## 🚀 Key Highlights & Architecture

- **Technical Aesthetic**: Dark graphite palette (`#12151A`, `#191D24`, `#2A2F38`) with amber and teal/cyan telemetry indicators and `IBM Plex Sans` / `IBM Plex Mono` typography.
- **Interactive Multi-Provider AI Failover Simulation**: A live SVG architecture centerpiece demonstrating task-level fallback routing across OpenAI, Anthropic, and Google with dynamic failover state handling (~500ms reroute delay).
- **Production-Grounded Content**: Detailed reverse-chronological timeline of roles at Medley Learning, Highlevel, Elixia Tech, Tericsoft, and Great Manager Institute.
- **Accessibility & Performance**: Fast lightweight static assets, keyboard navigable with explicit focus states, semantic HTML5, and `prefers-reduced-motion` compliance.

---

## 🔗 Connected Profiles & Resume

The portfolio links are configured as follows:

| Resource | URL | Locations |
| :--- | :--- | :--- |
| **Resume (Google Drive)** | [Google Drive Resume](https://drive.google.com/file/d/1Rm3-pFNB9KRccZpInSo53PpZMFd2KpD0/view?usp=sharing) | Nav button, Hero button, Contact card, Footer |
| **LinkedIn** | [linkedin.com/in/ash49](https://www.linkedin.com/in/ash49/) | Hero metadata list, Contact section |
| **GitHub** | [github.com/enigma49](https://github.com/enigma49) | Hero metadata list, Contact section |
| **Email** | `mailto:shaikhhamza157@gmail.com` | Hero button, Contact section |
| **Phone** | `tel:+918767553506` | Hero metadata, Contact section |

---

## 🌐 Deploying to GitHub Pages

The portfolio is structured for direct deployment from the root directory (`/`):

1. Commit and push your changes to your GitHub repository (e.g. `main` branch):
   ```bash
   git add .
   git commit -m "Update portfolio site and interactive failover demo"
   git push origin main
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**:
     - **Source**: `Deploy from a branch`
     - **Branch**: `main` (or your default branch) / `/(root)`
   - Click **Save**.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/` (or your custom domain).

---

## 💻 Local Development / Preview

Because the site uses standard vanilla HTML/CSS/JS without any build steps, you can preview it immediately using any local static file server or by opening `index.html` in a web browser:

```bash
# Using Python 3
python -m http.server 8000

# Or using Node / npx
npx serve .
```
Then visit `http://localhost:8000` in your browser.
