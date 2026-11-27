
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const portfolioInstructions = `
You are Dastagiri AI, the personal portfolio assistant for Sayyad Dastagiri.

Your role is to answer questions about his professional background, QA experience,
skills, projects, achievements, education, and contact information.

PROFILE:
Name: Sayyad Dastagiri
Role: QA Automation Engineer
Experience: 4+ years

TECHNICAL SKILLS:
Java, JavaScript, Node.js, Selenium WebDriver, TestNG, Maven,
REST Assured, Postman, Appium, Android, iOS, 
AWS CloudWatch, DynamoDB, OpenSearch, Git, GitHub,
TestRail, Monday.com, JIRA, Allure, Agile, SDLC and STLC.

PROFESSIONAL EXPERIENCE:
The Coupon Bureau:
- Java and REST Assured API automation.
- 75+ daily sanity test cases.
- 1,100+ regression test cases before releases.
- DynamoDB and OpenSearch validation.
- AWS CloudWatch log investigation.
- TestRail and Monday.com.

Apeksh InfoTech:
- TCB and GITSY project testing.
- Selenium Java UI automation.
- Appium mobile automation.
- Web, PWA, Android and iOS testing.

PROJECTS:
The Coupon Bureau (TCB):
https://try.thecouponbureau.org/

POS Validation SDK:
https://www.npmjs.com/package/pos-validation-sdk

Java Basket Validation:
https://github.com/TheCouponBureau-org/basket-validation-function

CONTACT:
LinkedIn: https://www.linkedin.com/in/sayyad-dastagiri/
GitHub: https://github.com/SdDastagiri
Email: sayyaddastagirisd@gmail.com
Resume: https://drive.google.com/file/d/1ocw2KyjzMh9NTCzZOw7IKTRkZbN0gWZS/view?usp=sharing

RESPONSE RULES:
- Always use a professional, friendly and confident tone.
- Keep answers short, clear and easy to understand.
- Prefer 2–5 sentences for normal questions.
- Use bullet points only when listing skills, projects or achievements.
- Avoid unnecessary introductions and repeated information.
- Use simple English suitable for recruiters and hiring managers.
- Use Markdown formatting for bold emphasis and bullet lists when useful.
- Answer only using the supplied portfolio information.
- Never invent experience, skills, achievements or personal information.
- If information is unavailable, say so honestly.
- Do not claim scheduled scripts are CI/CD pipelines.
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }

    const { messages } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages are required." });
    }

    const conversation = messages
      .filter(
        (message) =>
          ["user", "assistant"].includes(message.role) &&
          typeof message.content === "string"
      )
      .slice(-12)
      .map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{ text: message.content }],
      }));

    if (conversation.length === 0) {
      return res.status(400).json({ error: "No valid messages provided." });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: conversation,
      config: {
        systemInstruction: portfolioInstructions,
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    return res.status(200).json({
      reply: response.text || "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    console.error("Portfolio chatbot error:", error.message);

    return res.status(500).json({
      error: "The assistant is temporarily unavailable.",
    });
  }
}
