import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const API_URL = "https://3700-103-102-144-171.ngrok-free.app/api"; // Replace with your backend URL
export const API = "https://3700-103-102-144-171.ngrok-free.app"; // Replace with your backend URL

// API variable
const api = axios.create({
  baseURL: API_URL,
  // method: 'POST',
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Function to handle user sign-up
export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/customer`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to sign up");
  }
};

// Log In
export const logIn = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/customer/login`, credentials);
    console.log("Login successful");
    return response.data;
  } catch (error) {
    console.error("Login failed", error);
    setError("Invalid credentials, please try again.");
  }
};

// Logout Function
export const logOut = async () => {
  try {
    const response = await api.post("/customer/logout");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to log out");
  }
};

// Profile Function
export const profileInfo = async () => {
  console.log("Profile API 1");

  try {
    const response = await api.get("/customer/profile/show");
    console.log("Profile API => " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log("Profile API => Error");
    throw new Error("Failed to fetch profile info");
  }
};

// Function to handle profile updates
export const updateProfile = async (userId, userData) => {
  console.log("Update => API ");

  try {
    const response = await api.put(`/customer/profile/${userId}`, userData); // API call for updating profile
    console.log("Update => " + response.data);
    return response.data;
  } catch (error) {
    console.log("Update => API Error ");
    throw new Error(
      error.response?.data?.message || "Failed to update profile"
    );
  }
};

// Weekly Menu List Function
export const getMenuByDay = async () => {
  console.log("Fetching Weekly Menu...");

  try {
    const response = await api.get("/customer/weekly-menus/all"); // Use `api.get` here
    console.log("Fetched Menu: ", response.data); // Log actual response data
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching menu:",
      error.response?.data?.message || error.message
    );
    throw new Error("Failed to fetch weekly menu");
  }
};

// Fetch Order History
export const getOrderHistory = async () => {
  console.log("API => " + 1);

  try {
    const response = await api.get("customer/orders/all"); // Replace with your actual endpoint
    console.log("API => " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log("API => error 1");
    console.error(
      "Error fetching order history:",
      error.response?.data?.message || error.message
    );
    console.log("API => error 2");
    throw new Error("Failed to fetch order history");
  }
};

// Function to fetch packages from the backend
export const getPackages = async () => {
  try {
    const response = await api.get("/customer/subscription-plans/all"); // Backend API to get packages
    return response.data; // Return the response data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch packages"
    );
  }
};

export default api;
