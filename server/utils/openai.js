import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL || "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "Smart Resume Analyzer",
  },
});

// 🔹 Generic AI response
export const getOpenAIResponse = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: "meta-llama/llama-3-8b-instruct",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("AI Error:", error);
    throw new Error("Failed to get AI response");
  }
};

// 🔹 Resume Review AI
export const getAIReview = async (resumeText) => {
  const prompt = `
Analyze the following resume and return feedback strictly in JSON format.

Return ONLY JSON like this:

{
  "resumeType": "Tech or Non-Tech",
  "score": {
    "skills": 0,
    "projects": 0,
    "experience": 0,
    "communication": 0,
    "formatting": 0,
    "overall": 0
  },
  "summary": "",
  "pros": [],
  "cons": [],
  "suggestions": []
}

Resume:
${resumeText}
`;

  try {
    const response = await openai.chat.completions.create({
      model: "meta-llama/llama-3-8b-instruct",
      messages: [
        {
          role: "system",
          content:
            "You are a professional resume reviewer. Reply ONLY with valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 900,
    });

    const result = response.choices[0].message.content;

    console.log("AI RAW RESPONSE:", result);

    // 🔹 remove markdown if present
    let cleaned = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // 🔹 extract JSON
    const firstBrace = cleaned.indexOf("{");
    const lastBrace = cleaned.lastIndexOf("}");

    if (firstBrace === -1 || lastBrace === -1) {
      throw new Error("JSON not found in AI response");
    }

    const jsonString = cleaned.substring(firstBrace, lastBrace + 1);

    const parsed = JSON.parse(jsonString);

    return parsed;
  } catch (error) {
    console.error("AI Review error:", error);

    return {
      score: 0,
      summary: "AI response format issue.",
      pros: [],
      cons: [],
      suggestions: [],
    };
  }
};
