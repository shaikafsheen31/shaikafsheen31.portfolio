# Shaik Afsheen — Portfolio (Full Site, ported from JSX)

This is a plain HTML/CSS/JS conversion of your Portfolio.jsx design —
same look (near-black background, violet accent, Sora/Inter/IBM Plex
Mono), same sections, no React/build step required. Just open
`index.html` in a browser.

## Opening it
If double-clicking `index.html` opens a code editor instead of a
browser: right-click the file → **Open with** → choose Chrome/Edge/
Firefox. Tick "Always use this app" so double-click opens a browser
from now on.

## What changed from the JSX version, per your last message
- **"Software Engineering" / "Software Developer" → "Data Analyst"**
  everywhere it appeared as a role/title (hero tag, About's "Currently
  focused on" list, footer).
- **Skill set**: removed SVM, KNN, SHAP, LIME, Seaborn, and
  Scikit-learn from the general Skills section (they weren't on your
  actual resume) — added **Data Analyst** as a skill tag. Those tools
  are still listed under LoanSense's and the E. coli project's own
  tech stacks, since they were genuinely used there.
- **Project order**: LoanSense AI is still #1. The E. coli antibiotic
  resistance research is now **project #2** (previously it only lived
  in a separate "Research" block below the project grid) — it carries
  its full title, description, and a "Results" panel in its modal
  (accuracy, ROC-AUC, precision, recall, and the confusion matrix,
  computed from your real numbers: TN 1346, FP 13, FN 105, TP 78).
  Cognify (RAG platform, in progress) moved to **project #3**.
- **Resume**: your uploaded CV was converted to
  `assets/Shaik_Afsheen_Resume.pdf` and wired into both the "View
  Resume" and "Download Resume" buttons in the Resume CTA section.

## Making changes
Everything text-based — name, bio, skills, projects, timeline,
highlights — lives in **`data.js`**. Edit the values, save, refresh.
No need to touch `index.html`, `style.css`, or `script.js` for a
content change.

### Updating the resume
Replace `assets/Shaik_Afsheen_Resume.pdf` with a newer export (same
filename) and the buttons keep working automatically. If you rename
the file, update the two `href="assets/..."` lines in the Resume CTA
section of `index.html` to match.

### Adding live demo links
Project cards don't currently show a "Live Demo" link since none
exist yet. Once you have one, add a `live: "https://your-url"` field
to that project's entry in `data.js` and a matching link in the
`openModal()` / card-render logic in `script.js` (ask me any time and
I'll wire it in for you).

## Hosting it for free
**GitHub Pages**: new repo → upload these files → Settings → Pages →
Deploy from branch (`main` / root) → live at
`https://<username>.github.io/<repo>`.

**Netlify/Vercel**: drag-and-drop this folder onto netlify.com or
vercel.com for an instant live URL.
