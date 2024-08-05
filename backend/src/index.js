import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load API key from .env file

const app = express();
const port = process.env.PORT || 3000; // Set port from environment variable or default to 3000
app.use(express.json());
app.use(cors());
// Initialize Gemini API client with your API key
const geminiApiKey = process.env.GEMINI_API_KEY;
const googleAI = new GoogleGenerativeAI(geminiApiKey);

async function generateText(
  prompt,
  temperature = 0.9,
  topP = 1,
  topK = 1,
  maxOutputTokens = 4096
) {
  const geminiConfig = { temperature, topP, topK, maxOutputTokens };
  const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    geminiConfig,
  });

  try {
    const result = await geminiModel.generateContent(prompt);
    //console.log(result.response);
    return result.response.text();
  } catch (error) {
    console.error(error);
    return "An error occurred during generation.";
  }
}

// Route to handle text generation requests
app.post("/convert", async (req, res) => {
  const { sourceCode, sourceLanguage, targetLanguage } = req.body;
  //console.log(sourceCode, sourceLanguage, targetLanguage);
  const prompt = `Convert the ${sourceLanguage} code ${sourceCode} to ${targetLanguage} code. Please only generate code no explanations`;
  //console.log(prompt);
  if (!prompt) {
    return res.status(400).send("Please provide a prompt to generate text.");
  }

  const convertedCode = await generateText(prompt);
  res.json({ convertedCode });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
