export const API = "https://fleetmind-backend.onrender.com/api";

export async function login(data: any) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}
