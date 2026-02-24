 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index ffafaa4270631dad958c294abfbfda87fcee5d95..8ddb2b748a9e7d2ba38003f0708e205fdd5df83e 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,58 @@
-# diginovations
\ No newline at end of file
+# DIGINOVATION Website
+
+Static corporate website for **DIGINOVATION (SMC-PRIVATE) LIMITED**.
+
+## Run locally
+
+### Option 1: Python (recommended)
+```bash
+python3 -m http.server 8000
+```
+Then open:
+- `http://localhost:8000`
+
+### Option 2: Node (if you have npx)
+```bash
+npx serve .
+```
+Then open the URL shown in terminal.
+
+---
+
+## How to check it
+
+### 1) Basic load check in browser
+- Open the site URL.
+- Confirm sections are visible: Hero, About, Services, Why Choose Us, Portfolio, Process, Contact, Footer.
+- Resize browser to mobile width and verify the hamburger navigation works.
+
+### 2) JavaScript syntax check
+```bash
+node --check script.js
+```
+Expected: no syntax errors.
+
+### 3) Quick file sanity check
+```bash
+ls index.html style.css script.js favicon.svg
+```
+Expected: all files listed.
+
+### 4) Optional HTML/CSS linting (if installed)
+```bash
+npx htmlhint index.html
+npx stylelint "*.css"
+```
+
+---
+
+## GitHub Pages deployment
+
+1. Push repository to GitHub.
+2. Go to **Settings → Pages**.
+3. Under **Build and deployment**, choose:
+   - Source: `Deploy from a branch`
+   - Branch: your default branch (`/root`)
+4. Save and wait for deployment.
+5. Open the generated Pages URL.
+
 
EOF
)
