
import { GoogleGenAI } from "@google/genai";
import { AnalysisData } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const generatePrompt = (topic: string): string => `
For the geopolitical topic: "${topic}".

You are an expert geopolitical analyst and a mentor for UPSC (Union Public Service Commission) civil services examination aspirants in India. Your analysis must be neutral, objective, and comprehensive, suitable for high-level competitive exam preparation.

Please provide a detailed analysis in a valid JSON format. Do not include any introductory text, concluding remarks, or any text outside of the JSON object.

The JSON object must have the following structure:
{
  "swot": {
    "strengths": ["List of 3-5 strengths as strings"],
    "weaknesses": ["List of 3-5 weaknesses as strings"],
    "opportunities": ["List of 3-5 opportunities as strings"],
    "threats": ["List of 3-5 threats as strings"]
  },
  "pest": {
    "political": ["List of 3-5 political factors as strings"],
    "economic": ["List of 3-5 economic factors as strings"],
    "social": ["List of 3-5 social factors as strings"],
    "technological": ["List of 3-5 technological factors as strings"]
  },
  "keyPlayers": [
    {
      "name": "Name of Country/Organization/Leader",
      "description": "A brief, neutral description of their role and significance in the context of the topic."
    }
  ],
  "interviewQuestions": [
    "UPSC-style question 1...",
    "UPSC-style question 2...",
    "UPSC-style question 3...",
    "UPSC-style question 4..."
  ],
  "timeline": [
    {
      "date": "YYYY-MM-DD or Month YYYY",
      "event": "A concise description of the key event."
    }
  ]
}

Ensure all descriptions and points are concise, analytical, and directly relevant to the topic. For Key Players, include all major countries, international organizations (like UN, NATO, BRICS), and significant leaders involved. The timeline should highlight the most critical milestones.
`;

export const fetchGeopoliticalAnalysis = async (topic: string): Promise<AnalysisData> => {
  try {
    const prompt = generatePrompt(topic);
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-04-17",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            temperature: 0.3,
        }
    });

    let jsonStr = response.text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
    
    const parsedData = JSON.parse(jsonStr);

    // Basic validation to ensure the structure is somewhat correct
    if (!parsedData.swot || !parsedData.pest || !parsedData.keyPlayers) {
        throw new Error("Received incomplete data structure from AI.");
    }

    return parsedData as AnalysisData;
  } catch (error: any) {
    console.error("Error fetching or parsing geopolitical analysis:", error);
    throw new Error(
      "Failed to retrieve or process the analysis from the AI service. The topic might be too broad or the service may be temporarily unavailable."
    );
  }
};
