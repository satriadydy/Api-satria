export async function handler() {
  const res = await fetch("https://nadiastore.id/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": "0R8Wg70Kq24mxvjyIF"
    },
    body: JSON.stringify({
      username: "cocsatria13@gmail.com",
      password: "xobawe123"
    })
  });
  const data = await res.json();
  return {
    statusCode: res.status,
    body: JSON.stringify(data)
  };
}