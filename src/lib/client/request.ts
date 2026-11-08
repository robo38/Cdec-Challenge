export async function request(url: string, body: unknown): Promise<ApiResult> {
  try {

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return { ...data, ok: response.ok };
  } catch {
    return {
      ok: false,
      message: "Something went wrong, please try again"
    };
  }
}
