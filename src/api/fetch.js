// fetch.js
const BASE_URL = "http://localhost/projectweb/api/messages"; // Pastikan sesuai dengan Laragon

export const postMessage = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/create.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: data.name,
        email: data.email,
        subjek: data.subject,
        pesan: data.message,
      }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Gagal mengirim pesan");
    return result;
  } catch (error) {
    throw error;
  }
};
