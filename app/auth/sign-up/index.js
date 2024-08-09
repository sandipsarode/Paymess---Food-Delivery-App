import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Colors } from '@/constants/Colors'
import { Redirect, useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SignUp() {
    const router = useRouter();

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
                    />
                    <TextInput
                        placeholder="Last Name"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Username / Email"
                        style={styles.input}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Password"
                        style={styles.input}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                        style={styles.input}
                    />

                    {/* Sign In Button */}
                    <TouchableOpacity
                        onPress={() => router.navigate('/explore')}
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