export async function handler(event) {
  const res = await fetch("https://nadiastore.id/api/profile", {
    headers: {
      "Authorization": event.headers.authorization,
      "apikey": "0R8Wg70Kq24mxvjyIF"
    }
  });
  const data = await res.json();
  return {
    statusCode: res.status,
    body: JSON.stringify(data)
  };
}