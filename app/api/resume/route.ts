import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { resume } = await req.json();

    const completion =
      await openai.chat.completions.create({
        model: "openrouter/free",
        messages: [
          {
            role: "user",
            content: `
Analyze this resume.

Give:
1. Strengths
2. Weaknesses
3. Missing Skills
4. Suggestions

Resume:
${resume}
            `,
          },
        ],
      });

    return Response.json({
      response:
        completion.choices[0].message.content,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to analyze" },
      { status: 500 }
    );
  }
}