import axios from "axios";

export const API_BASE = "http://10.23.252.211:8000";

export const api = axios.create({
    baseURL: API_BASE,
    timeout: 7000,
    headers: {
        "Content-Type" : "application/json",
    }
})


export async function sendContact(payload) {
    try {
        const response = await api.post("/api/contact", payload);
        return response;
    } catch (error) {
        console.error("Error sending contact data:", error);
        throw error;       
    }
}

export default api;