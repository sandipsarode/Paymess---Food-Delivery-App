import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

// Importing logIn function from api.js for the Cutomer LogIn
import { logIn } from './../../services/api';

export default function SignIn() {
    const router = useRouter();

    // Importing email and Pass
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useState for loader
    const [loading, setLoading] = useState(false);

    // Function to Handle SignIn
    const handleLogIn = async () => {
        setLoading(true); // Show loader
        try {
            const credentials = { email, password };
            const response = await logIn(credentials);
            await AsyncStorage.setItem('userToken', response.token);
            Alert.alert('Success', 'Logged in successfully!');
            router.replace('/explore');
        } catch (error) {
            Alert.alert('Error', error.message || 'Failed to log in');
        } finally {
            setLoading(false); // Hide loader
        }
    };


    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                {/* Loader */}
                <Spinner visible={loading} textContent={'Loading...'} textStyle={{ color: '#FFF' }} overlayColor="rgba(0, 0, 0, 0.7)" />

                {/* Logo of the App */}
                <Image source={require('./../../../assets/images/logo2.png')}
                    style={{
                        width: '100%',
                        height: 350,
                        resizeMode: 'contain'
                    }}
                />

                <View>
                    {/* Header lines of the App */}
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'openSans-extraBold',
                        marginBottom: 10
                    }}>Welcome Back, Foodie!</Text>
                    <Text style={{
                        fontSize: 17,
                        fontFamily: 'openSans-bold'
                    }}>Your Gateway to </Text>
                    <Text style={{
                        fontSize: 17,
                        fontFamily: 'openSans-bold'
                    }}>Delightful Dining and Delivery</Text>

                    {/* Log in or Sign Up Divider */}
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 20
                    }}>
                        <View style={styles.line} />
                        <Text style={styles.txt}>Log in or Sign Up</Text>
                        <View style={styles.line} />
                    </View>

                    {/* Input fields for the Sign In */}
                    <TextInput
                        placeholder="Username, Login ID"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Password"
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                    />

                    {/* Sign In Button */}
                    <TouchableOpacity
                        onPress={handleLogIn}
                        style={[styles.btn, {
                            padding: 10,
                            backgroundColor: Colors.VALENTINE_RED,
                        }]}
                    >
                        <Text
                            style={{
                                color: 'white',
                                textAlign: "center",
                                fontFamily: 'openSans-extraBold'
                            }}
                        >
                            Log In
                        </Text>
                        {/* <LoginLoader visible={modalVisible} onClose={handleLoaderClose} /> */}
                    </TouchableOpacity>

                    {/* Forgot Password ? Button */}
                    <TouchableOpacity
                        style={{
                            margin: 15
                        }}
                    >
                        <Text
                            style={{
                                color: Colors.BOULDER,
                                textAlign: "center",
                                fontFamily: 'openSans-extraBold'
                            }}
                        >
                            Forgot Password ?
                        </Text>
                    </TouchableOpacity>

                    {/* Sign Up Button */}
                    <TouchableOpacity
                        onPress={() => router.push('/auth/sign-up')}
                        style={[styles.btn, {
                            padding: 8,
                            borderColor: Colors.VALENTINE_RED,
                            borderWidth: 3,
                            marginTop: 25
                        }]}
                    >
                        <Text
                            style={{
                                color: Colors.VALENTINE_RED,
                                textAlign: "center",
                                fontFamily: 'openSans-extraBold'
                            }}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

// StyleSheet
const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    line: {
        width: 115,
        height: 1,
        backgroundColor: Colors.BOULDER,
    },
    txt: {
        margin: 5,
        color: Colors.BOULDER,
        fontSize: 12,
        fontFamily: 'openSans-bold'
    },
    input: {
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.BOULDER,
        fontFamily: "openSans-bold",
    },
    btn: {
        borderRadius: 20,
        width: '85%',
        margin: 'auto',
    }
})