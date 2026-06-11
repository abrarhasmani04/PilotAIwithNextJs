import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { career } = await req.json();

    const completion =
      await openai.chat.completions.create({
        model: "openrouter/free",
        messages: [
          {
            role: "user",
            content: `
Create a detailed 6 month roadmap for becoming a ${career}.

Include:
- Month wise plan
- Skills
- Projects
- Resources
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
      { error: "Failed" },
      { status: 500 }
    );
  }
}