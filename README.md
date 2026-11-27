# Sayyad Dastagiri — QA Automation Engineer Portfolio

A responsive, dark-themed personal portfolio built with **React, Vite, and JavaScript**. It presents Sayyad Dastagiri's QA automation experience, technical skills, projects, achievements, and contact information.

The portfolio also includes an AI-powered chatbot backed by **Google Gemini**, with suggested questions, browser-based voice input, and text-to-speech playback.

## Live Links

- **Portfolio:** https://dastagiri-qa.vercel.app/
- **GitHub repository:** https://github.com/SdDastagiri/dastagiri-qa-portfolio
- **LinkedIn:** https://www.linkedin.com/in/sayyad-dastagiri/

## Features

### Portfolio
- Responsive layout with a dark visual theme.
- Hero section with profile photograph and professional links.
- About and career summary.
- Technical skills grouped by category, with technology icons.
- Project cards for The Coupon Bureau (TCB), POS-SDK, and GITSY.
- Professional experience timeline, including separate TCB Platform and POS-SDK project entries.
- Career achievements and education.
- Contact links for email, phone, LinkedIn, GitHub, and resume.
- Mobile navigation, animated section reveals, profile-photo lightbox, and back-to-top control.

### AI Portfolio Chatbot
- Chat interface powered by Google Gemini.
- Five suggested questions about Dastagiri's profile, experience, skills, POS-SDK, and mobile automation.
- AI-generated answers based on portfolio-specific instructions.
- Text-based questions and follow-up conversation through the chat input.
- Browser speech recognition for voice question input (when supported by the visitor's browser).
- Browser text-to-speech for listening to assistant responses, with listen, pause, resume, and stop controls.
- Chat reset and loading feedback.

Voice input and text-to-speech use browser capabilities. Availability and voice quality depend on the visitor's browser, operating system, language settings, and microphone permissions. The chatbot does not use ElevenLabs or another paid text-to-speech provider.

## Technology Stack

### Frontend
- React 18
- Vite 6
- JavaScript (ES modules)
- CSS
- Lucide React
- React Markdown

### AI and Browser APIs
- Google Gemini API via `@google/genai`
- Vercel serverless function for the chatbot backend
- Web Speech API (speech recognition and speech synthesis, where supported)

### Development and Deployment
- Node.js
- npm
- Git and GitHub
- Vercel
- Visual Studio Code

## Requirements

- Node.js **18.18 or later** (Node.js 20 LTS is recommended)
- npm
- A Google Gemini API key for chatbot responses
- Vercel CLI for running the frontend and serverless API together locally

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SdDastagiri/dastagiri-qa-portfolio.git
cd dastagiri-qa-portfolio
```

Alternatively, download the repository ZIP and open the extracted project folder in Visual Studio Code.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the Gemini API key

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Get an API key from [Google AI Studio](https://aistudio.google.com/).

Keep this key private. Do not add it to frontend code, commit it to Git, or expose it in the browser.

### 4. Run the complete application locally

The chatbot backend is implemented as a Vercel serverless function in `api/chat.js`. To run both the Vite frontend and the API function locally, use:

```bash
npx vercel dev
```

Vercel CLI may ask you to link the local folder to a Vercel project. Follow the prompts and make sure the `GEMINI_API_KEY` environment variable is available to the local Vercel development environment.

Open the local URL shown in the terminal.

### Frontend-only development

To run only the Vite frontend:

```bash
npm run dev
```

This starts the Vite development server, usually at `http://localhost:5173`. The Vercel serverless endpoint `/api/chat` is not provided by the standard Vite development server, so chatbot requests require `npx vercel dev` or a deployed Vercel environment.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite frontend development server |
| `npm run build` | Creates the production frontend build |
| `npm run preview` | Serves the generated production build locally |
| `npx vercel dev` | Runs the project locally with Vercel serverless functions |

## Production Build

Build the frontend:

```bash
npm run build
```

Preview the generated build:

```bash
npm run preview
```

Vite writes the production frontend files to the `dist/` directory.

Note: `npm run preview` serves the built frontend. It does not independently run the Vercel serverless chatbot function.

## Deploy to Vercel

This project uses a Vercel serverless function for the Gemini chatbot, so Vercel is the configured deployment platform.

1. Push the project to the GitHub repository.
2. Sign in to [Vercel](https://vercel.com/).
3. Select **Add New → Project** and import the repository.
4. Use the Vite framework preset and the following build settings:

   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. Open **Project Settings → Environment Variables**.
6. Add the following variable for the required deployment environments:

   ```env
   GEMINI_API_KEY=your_gemini_api_key
   ```

7. Deploy the project.
8. After changing environment variables, trigger a new deployment for the changes to take effect.

The `api/chat.js` function is deployed as a Vercel serverless API route. The Gemini API key is read on the server and should never be placed in client-side code.

## Portfolio Content and Customisation

Most portfolio content is maintained in:

```text
src/data.js
```

The `profile` object contains:
- Name and professional title
- Email and phone number
- LinkedIn and GitHub URLs
- Google Drive resume URL

The same `profile.resume` value is used by the resume links in the portfolio. When replacing the resume, update this value and ensure the Google Drive file is shared with **Anyone with the link — Viewer** if the portfolio is public.

The same file also contains:
- `achievements` — portfolio achievement metrics
- `skillGroups` — technical skills by category
- `projects` — project summaries, contributions, technology stacks, and links
- `experience` — employment history and project-specific responsibilities
- `education` — academic details

The chatbot's professional knowledge and response guidelines are maintained separately in:

```text
api/chat.js
```

If professional details change, update the portfolio data and review the chatbot instructions so both remain accurate and consistent.

## Project Structure

```text
dastagiri-qa-portfolio/
├── api/
│   └── chat.js
├── public/
│   ├── icons/
│   │   ├── cloudwatch.svg
│   │   ├── dynamodb.svg
│   │   ├── java.svg
│   │   ├── monday.svg
│   │   └── testng.svg
│   ├── dastagiri-profile.jpg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PortfolioChatbot.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SkillCard.jsx
│   │   └── TimelineItem.jsx
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Security and Privacy Notes

- Store `GEMINI_API_KEY` in local environment configuration and Vercel Environment Variables.
- Do not commit `.env.local`, API keys, or other secrets to GitHub.
- The `.gitignore` file excludes environment files, `node_modules`, build output, and Vercel local configuration.
- The chatbot sends visitor questions and relevant conversation history to the Gemini API to generate responses. Do not enter confidential or sensitive information into a public portfolio chatbot.
- Voice input depends on browser microphone permission and speech-recognition support.
- Project descriptions are kept high-level and do not expose confidential client information, internal endpoints, or production data.

## License

No open-source license is currently specified for this repository. All rights to the portfolio content, personal branding, and original assets remain with their respective owner unless otherwise stated.

---

**Designed and developed by Sayyad Dastagiri**  
QA Automation Engineer | API, UI & Mobile Automation
