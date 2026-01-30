export async function POST(req) {
  try {
    const { message } = await req.json();

    const menu = `
Burger - ৳300
Pizza - ৳500
Fried Chicken - ৳350
Sandwich - ৳200
    `;

    const prompt = `
You are an AI food assistant for a food delivery website.

Menu:
${menu}

Rules:
- Suggest food ONLY from the menu
- Use Bangladeshi Taka (৳)
- Be friendly and concise
- If user selects a category (burger, pizza, spicy, budget), suggest directly
- NEVER repeat the same question twice
- NEVER reply with only a question like "What would you like to eat?"
- If input is unclear, guide with examples

User message:
${message}
`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      },
    );

    const data = await res.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "You can try Burger (৳300), Pizza (৳500), or Fried Chicken (৳350). What sounds good? 😊";

    return new Response(JSON.stringify({ reply }), { status: 200 });
  } catch (error) {
    console.error("GEMINI ERROR:", error);
    return new Response(
      JSON.stringify({
        reply: "Sorry 😕 I'm having trouble right now.",
      }),
      { status: 500 },
    );
  }
}
