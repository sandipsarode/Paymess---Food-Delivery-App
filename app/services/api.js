import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://1dc6-103-102-144-174.ngrok-free.app/api'; // Replace with your backend URL

// API variable
const api = axios.create({
    baseURL: API_URL,
    // method: 'POST',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// api.interceptors.request.use(async (config) => {
//     const token = await AsyncStorage.getItem('userToken');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// },
//     (error) => Promise.reject(error)
// );
// Adding Authorization Token Interceptor
api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('userToken');
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
        throw new Error(error.response?.data?.message || 'Failed to sign up');
    }
};

// Log In
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

// Logout Function
// export const logOut = async () => {
//     console.log("LogOut 1");

//     try {
//         console.log("LogOut 2");
//         // const response = await axios.post(`${API_URL}/customer/logout`); // Adjust the endpoint as per your backend
//         // const response = await axios.post('/customer/logout'); // Adjust the endpoint as per your backend
//         const response = await api.post('/customer/logout');
//         console.log("LogOut 3");
//         return response.data;
//     } catch (error) {
//         console.log("LogOut Error");
//         throw new Error(error.response?.data?.message || 'Failed to log out');
//     }
// };

export const logOut = async () => {
    try {
        const response = await api.post("/customer/logout");
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to log out");
    }
};


// Weekly Menu List Function
export const getMenuByDay = async () => {
    console.log("Fetching Weekly Menu...");

    try {
        const response = await api.get('/customer/weekly-menus/all');  // Use `api.get` here
        console.log("Fetched Menu: ", response.data);  // Log actual response data
        return response.data;
    } catch (error) {
        console.error("Error fetching menu:", error.response?.data?.message || error.message);
        throw new Error("Failed to fetch weekly menu");
    }
};


export default api;