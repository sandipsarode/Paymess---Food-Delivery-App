import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Importing signUp function from api.js
import { signUp } from './../../services/api';
import { useState } from 'react';

export default function SignUp() {
    const router = useRouter();

    // constants for email and password
    const [first_name, setFName] = useState('');
    const [last_name, setLName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setConfirmPassword] = useState('');

    //   function to handle sign-up
    // const handleSignUp = async () => {
    //     try {
    //         const userData = { first_name, last_name, phone, email, password, password_confirmation };
    //         const response = await signUp(userData);

    //         if (!response.ok) {
    //             throw new Error('Failed to sign up....');
    //         }

    //         // if (setPassword.length < 8) Alert.alert('Error' || 'Password should be at least 8');

    //         const result = await response.json();

    //         Alert.alert('Success', 'Account created successfully!');
    //         // navigation.navigate('auth/sign-in');
    //         router.push('/auth/sign-in');
    //     }
    //     catch (error) {
    //         Alert.alert('Error', error.message || 'Failed to sign up');
    //     }
    //     // catch (error) {
    //     //     console.log(error.response ? error.response.data : error.message);
    //     //     Alert.alert('Error', error.response ? error.response.data.message : 'Failed to sign up');
    //     // }
    // };


    const handleSignUp = async () => {
        if (password.length < 8) {
            Alert.alert('Error', 'Password should be at least 8 characters long');
            return;
        }

        try {
            const userData = { first_name, last_name, phone, email, password, password_confirmation };
            const response = await signUp(userData);

            if (response.status !== 200) {
                throw new Error('Failed to sign up');
            }

            Alert.alert('Success', 'Account created successfully!');
            router.push('/sign-in');
        } catch (error) {
            // Alert.alert('Error', error.message || 'Failed to sign up');
            const errorMessage = error.response?.data?.message || error.message || 'Failed to sign up';
            Alert.alert('Error', errorMessage);
        }
    };


    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                {/* Logo of the App */}
                <Image source={require('./../../../assets/images/signUp.png')}
                    style={{
                        width: '100%',
                        height: 350,
                        resizeMode: 'contain'
                    }}
                />

                <View>
                    {/* Log in or Sign Up Divider */}
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -30,
                        marginBottom: 20
                    }}>
                        <View style={styles.line} />
                        <Text style={styles.txt}>Sign Up</Text>
                        <View style={styles.line} />
                    </View>

                    {/* Input fields for the Sign Up */}
                    <TextInput
                        placeholder="First Name"
                        style={styles.input}
                        value={first_name}
                        onChangeText={setFName}
                    />
                    <TextInput
                        placeholder="Last Name"
                        style={styles.input}
                        value={last_name}
                        onChangeText={setLName}
                    />
                    <TextInput
                        placeholder="Mobile No."
                        style={styles.input}
                        value={phone}
                        keyboardType='numeric'
                        maxLength={10}
                        onChangeText={setPhone}
                    />
                    <TextInput
                        placeholder="Username / Email"
                        style={styles.input}
                        value={email}
                        keyboardType='email-address'
                        onChangeText={setEmail}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Password"
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                        style={styles.input}
                        value={password_confirmation}
                        onChangeText={setConfirmPassword}
                    />

                    {/* Sign In Button */}
                    <TouchableOpacity
                        onPress={handleSignUp}
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
        height: 2,
        backgroundColor: Colors.BOULDER,
    },
    txt: {
        margin: 5,
        color: Colors.VALENTINE_RED,
        fontSize: 17,
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