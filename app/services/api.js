import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';

const API_URL = 'https://ecf4-103-102-144-174.ngrok-free.app/api'; // Replace with your backend URL

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
});


// // Sign Up
// export const signUp = async (userData) => {
//     try {
//         const response = await axios.post(`${API_URL} / register, userData`);
//         return response.data;
//     } catch (error) {
//         throw error.response.data;
//     }
// };

// Function to handle user sign-up
export const signUp = async (userData) => {
    try {
        const response = await api.post('/customer', userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to sign up');
    }
};


// Log In
export const logIn = async (credentials) => {
    // const navigation = useNavigation();
    try {
        const response = await axios.post(`${API_URL}/customer/login`, credentials);
        console.log('Login successful');
        return response.data;
        // } catch (error) {
        //     throw error.response.data;
        // }
        // if (response.data.token) {
        //     await AsyncStorage.setItem('userToken', response.data.token);
        //     console.log('Login successful', response.data.token);
        //     // Navigate to the main app screen
        //     // navigation.navigate('/explore');
        // }
    } catch (error) {
        console.error('Login failed', error);
        setError('Invalid credentials, please try again.');
    }
};

export default api;