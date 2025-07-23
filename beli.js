export async function handler(event) {
  const { layanan, target } = JSON.parse(event.body);

  const res = await fetch("https://nadiastore.id/api/beli", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": event.headers.authorization,
      "apikey": "0R8Wg70Kq24mxvjyIF"
    },
    body: JSON.stringify({ layanan, target })
  });

  const data = await res.json();
  return {
    statusCode: res.status,
    body: JSON.stringify(data)
  };
}