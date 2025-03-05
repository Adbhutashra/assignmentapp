import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState(null);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} />
            </View>

            <Text style={styles.descriptionText}>Login now to find whats{'\n'}happening around you</Text>

            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                label="Email address or mobile number"
                mode="outlined"
            />

            <Button
                style={styles.otpButton}
                labelStyle={styles.buttonText}
                onPress={() => { }}
            >
                Click on Send OTP
            </Button>

            <Button
                mode="contained"
                style={styles.loginButton}
                labelStyle={styles.buttonText}
                onPress={() => {
                    if (email && emailRegex.test(email)) {
                        navigation.navigate('BottomTabs')
                        setEmail(null);
                    } else {
                        Alert.alert('', 'Please Enter Email')
                    }
                }}
            >
                Login
            </Button>

            <Text style={styles.sendOtpText}>Send OTP</Text>

            <Text style={styles.orText}>or</Text>
            <Text style={styles.socialText}>Sign in with other accounts</Text>

            <View style={styles.socialIcons}>
                <Icon name="instagram" size={30} color="#E4405F" style={styles.icon} />
                <Icon name="facebook" size={30} color="#1877F2" style={styles.icon} />
                <Icon name="twitter" size={30} color="#1DA1F2" style={styles.icon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    descriptionText: {
        fontSize: 16,
        color: '#757575',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 20,
    },
    otpButton: {
        width: '100%',
        marginBottom: 15,
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#7C4DFF',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 16,
    },
    sendOtpText: {
        fontSize: 14,
        color: '#7C4DFF',
        marginBottom: 20,
        alignSelf: 'flex-end',
        right: 10
    },
    orText: {
        fontSize: 16,
        color: '#757575',
        textAlign: 'center',
        marginVertical: 10,
    },
    socialText: {
        fontSize: 14,
        color: '#757575',
        textAlign: 'center',
        marginBottom: 15,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        margin: 10,
    },
});

export default LoginScreen;