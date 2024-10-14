import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api/availability/";


export const fetchAvailability = async (date) => {
  try {
    const response = await axios.get(`${API_URL}${date}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch availability:", error);
    throw error;
  }
};