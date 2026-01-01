export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch(
      "https://fakerestaurantapi.runasp.net/api/User/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: body.userEmail,
          password: body.password,
        }),
      }
    );

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
