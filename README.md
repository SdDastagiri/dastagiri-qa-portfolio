# Sayyad Dastagiri — QA Automation Engineer Portfolio

A responsive, premium dark-theme portfolio built with React, Vite, and Lucide React.

## Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm

## Run locally in VS Code
1. Extract the ZIP and open the `dastagiri-qa-portfolio` folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production files are generated in `dist/`.

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
3. Import the repository.
4. Keep the defaults: Framework **Vite**, Build Command `npm run build`, Output Directory `dist`.
5. Select **Deploy**.

## Deploy to Netlify
1. Push this project to GitHub, then import it at [Netlify](https://www.netlify.com/).
2. Set Build Command to `npm run build` and Publish Directory to `dist`.
3. Select **Deploy site**.

## Personalisation notes
- Contact links, LinkedIn, GitHub, and resume link are configured in `src/data.js`.
- The portfolio deliberately uses only the experience, tools, and metrics supplied for this project.
- No employer logos, confidential screenshots, testimonials, API endpoints, or production data are included.
- The resume action opens the supplied Google Drive view link in a new tab. Confirm its sharing permission is set to **Anyone with the link — Viewer** before sharing the portfolio.

## Project structure
```text
src/
  components/
    Navbar.jsx
    SectionHeading.jsx
    SkillCard.jsx
    ProjectCard.jsx
    TimelineItem.jsx
  sections/
    Hero.jsx
    About.jsx
    Achievements.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Education.jsx
    Contact.jsx
  data.js
  App.jsx
  main.jsx
  styles.css
```
