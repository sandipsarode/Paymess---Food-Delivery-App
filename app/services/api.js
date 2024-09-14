import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://3e70-103-102-144-169.ngrok-free.app/api'; // Replace with your backend URL

// API variable
const api = axios.create({
    baseURL: API_URL,
    method: 'POST',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
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
export const logOut = async () => {
    console.log("LogOut 1");

    try {
        console.log("LogOut 2");
        // const response = await axios.post(`${API_URL}/customer/logout`); // Adjust the endpoint as per your backend
        // const response = await axios.post('/customer/logout'); // Adjust the endpoint as per your backend
        const response = await api.post('/customer/logout');
        console.log("LogOut 3");
        return response.data;
    } catch (error) {
        console.log("LogOut Error");
        throw new Error(error.response?.data?.message || 'Failed to log out');
    }
};

// export const logOut = async () => {
//     try {
//         // Log the token before making the request
//         const token = await AsyncStorage.getItem('userToken');
//         console.log('Attempting to log out with token:', token);

//         // Make the logout request using the api instance
//         const response = await api.post('/customer/logout');
//         console.log('Logout response:', response.data);

//         // If logout is successful, clear the token from AsyncStorage
//         await AsyncStorage.removeItem('userToken');
//         return response.data;
//     } catch (error) {
//         // Log the full error object for more information
//         console.error('Logout failed with error:', error);

//         // Log the backend error message if available
//         if (error.response) {
//             console.error('Backend response error:', error.response.data);
//             throw new Error(error.response.data.message || 'Failed to log out');
//         } else {
//             throw new Error('Failed to log out');
//         }
//     }
// };

// export const logOut = async () => {
//     try {
//         // Log the token before making the request
//         const token = await AsyncStorage.getItem('userToken');
//         console.log('Attempting to log out with token:', token);

//         // Test network connectivity
//         const networkTest = await fetch(API_URL);
//         if (!networkTest.ok) {
//             throw new Error('Network test failed, server might be unreachable');
//         }

//         // Make the logout request using the api instance
//         const response = await api.post('/customer/logout');
//         console.log('Logout response:', response.data);

//         // If logout is successful, clear the token from AsyncStorage
//         await AsyncStorage.removeItem('userToken');
//         return response.data;
//     } catch (error) {
//         // Log the full error object for more information
//         console.error('Logout failed with error:', error);

//         // Log the backend error message if available
//         if (error.response) {
//             console.error('Backend response error:', error.response.data);
//             throw new Error(error.response.data.message || 'Failed to log out');
//         } else {
//             throw new Error(error.message || 'Failed to log out');
//         }
//     }
// };



export default api;