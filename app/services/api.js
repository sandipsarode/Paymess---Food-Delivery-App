import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const API_URL = 'https://3700-103-102-144-171.ngrok-free.app/api'; // Replace backend URL
export const API = 'https://3700-103-102-144-171.ngrok-free.app'; // Replace backend URL

// API variable
const api = axios.create({
    baseURL: API_URL,
    // method: 'POST',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => Promise.reject(error)
);

// Function to handle user Sign-Up
export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/customer`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to sign up');
    }
};

// Function to handle user Log In
export const logIn = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/customer/login`, credentials);
        console.log('Login successful');
        return response.data;
    } catch (error) {
        console.error('Login failed', error);
        setError('Invalid credentials, please try again.');
    }
};

// Function to handle user Logout
export const logOut = async () => {
    try {
        const response = await api.post("/customer/logout");
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to log out");
    }
};

// Function to display the user profile
export const profileInfo = async () => {
    try {
        const response = await api.get("/customer/profile/show")
        return response.data
    } catch (error) {
        throw new Error("Failed to fetch profile info");
    }
}

// Function to handle user profile updates
export const updateProfile = async (userId, userData) => {
    try {
        const response = await api.put(`/customer/profile/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to update profile");
    }
};

// Function to handle user profile picture updates
export const updateProfilePicture = async (userId, formData) => {
    console.log("userData => " + JSON.stringify(formData));
    try {
        const response = await api.put(`/customer/profile/picture/${userId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error in updateProfilePicture:", error);
        throw new Error(error.response?.data?.message || "Failed to update profile");
    }
};

// Function to fetch the Weekly Menu List
export const getMenu = async (userId) => {
    try {
        const response = await api.get(`/customer/weekly-menus/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching menu:", error.response?.data?.message || error.message);
        throw new Error("Failed to fetch weekly menu");
    }
};

// Function to fetch Order History
export const getOrderHistory = async () => {
    try {
        const response = await api.get('customer/orders/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching order history:', error.response?.data?.message || error.message);
        throw new Error('Failed to fetch order history');
    }
};

export default api;