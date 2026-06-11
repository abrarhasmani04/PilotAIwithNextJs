import OpenAI from "openai";
import { connectDB } from "../../../components/utils/mongodb";
import Interview from "@/models/Interview";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { role } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "openrouter/free",
      messages: [
        {
          role: "user",
          content: `Generate 10 interview questions for ${role}`,
        },
      ],
    });

    await connectDB();

const newinterview = await Interview.create({
  role,
  response: completion.choices[0].message.content,
});

    return Response.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to generate" },
      { status: 500 }
    );
  }
}