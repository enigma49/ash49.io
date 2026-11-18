# Hamza Shaikh — Portfolio

Personal portfolio for **Hamza Shaikh**, Senior Fullstack Engineer focused on applied AI and backend systems, based in Mumbai and open to international remote roles.

Hosted live on GitHub Pages with zero build step, no framework overhead, and pure static HTML/CSS/JS.

---

## 🚀 Key Highlights & Architecture

- **Technical Aesthetic**: Dark graphite palette (`#12151A`, `#191D24`, `#2A2F38`) with amber and teal/cyan telemetry indicators and `IBM Plex Sans` / `IBM Plex Mono` typography.
- **Selected Work**: Ask VAIR and Medley case studies explain the problem, personal contribution, architecture decisions, and scoped outcomes. Native expandable sections provide more detail.
- **Public Work**: Direct links to the IncidentPulse repository and frontend implementation, plus the Docling Markdown line-break pull request and diff.
- **Interactive AI Fallback Demo**: A browser simulation across OpenAI, Anthropic, and Google. Provider states and transitions are illustrative, separate from measured production results.
- **Experience & Skills**: Remote work with US teams, React/Next.js, backend services, applied AI, data, and infrastructure.
- **Responsive Navigation**: Visible wrapping navigation, a keyboard skip link, focus states, and reduced-motion styles.

---

## 🔗 Connected Profiles & Resume

The portfolio links are configured as follows:

| Resource | URL | Locations |
| :--- | :--- | :--- |
| **Resume (Google Drive)** | [Google Drive Resume](https://drive.google.com/file/d/16WRUV8FV-nVxWKEltA7FB_Ivh4JYpA99/view?usp=sharing) | Nav button, Hero button, Contact card, Footer |
| **LinkedIn** | [linkedin.com/in/ash49](https://www.linkedin.com/in/ash49/) | Hero metadata list, Contact section |
| **GitHub** | [github.com/enigma49](https://github.com/enigma49) | Hero metadata list, Contact section |
| **Email** | `mailto:shaikhhamza157@gmail.com` | Hero link, Ask VAIR inquiry, Contact section |
| **Phone** | `tel:+918767553506` | Hero metadata, Contact section |
| **IncidentPulse** | [Public repository](https://github.com/enigma49/incident-pulse) | Public engineering work |
| **Docling** | [Pull request #5275](https://github.com/docling-project/docling/pull/5275) | Public engineering work |

---

## 🌐 Deploying to GitHub Pages

The portfolio is structured for direct deployment from the root directory (`/`):

1. Commit and push the changes to the portfolio’s `master` branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin master
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**:
     - **Source**: `Deploy from a branch`
     - **Branch**: `master` / `/(root)`
   - Click **Save**.
3. Check the **pages build and deployment** workflow in Actions. The site is served at [enigma49.github.io/ash49.io](https://enigma49.github.io/ash49.io/).

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
