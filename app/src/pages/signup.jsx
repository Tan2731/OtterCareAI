import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = () => {
        // Add your signup logic here
        console.log('Full Name:', fullName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={require('../images/logo.png')} style={styles.logo} />
                <Text style={styles.title}>OTTERCARE AI</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>LOG IN</Text>
                </TouchableOpacity>
            </View>

            {/* Create Account Title */}
            <Text style={styles.createAccount}>Create Account</Text>

            {/* Social Signup */}
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    {/* <Image
                        source={require('../images/google.png')}
                        style={styles.socialIcon}
                    /> */}
                    <Text style={styles.socialText}>Signup with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    {/* <Image
                        source={require('../images/facebook.png')}
                        style={styles.socialIcon}
                    /> */}
                    <Text style={styles.socialText}>Signup with Facebook</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.orText}>- OR -</Text>

            {/* Form Fields */}
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#666"
                value={fullName}
                onChangeText={setFullName}
            />

            <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#666"
                value={lastName}
                onChangeText={setLastName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Password Field with Toggle Visibility */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Password"
                    placeholderTextColor="#666"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIconContainer}
                >
                    <Text style={styles.eyeIcon}>
                        {showPassword ? '👁️' : '🔒'}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Signup Button */}
            <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Footer */}
            <Text style={styles.footer}>
                Already have an account?{' '}
                <Text
                    style={styles.linkText}
                    onPress={() => navigation.navigate('Login')}
                >
                    Log In
                </Text>
            </Text>

            <Text style={styles.copyright}>
                © Copyright California State University of Monterey Bay 2025
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e3e7',
        alignItems: 'center',
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4a5d72',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'monospace',
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    createAccount: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginTop: 30,
        marginBottom: 20,
    },
    socialContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '45%',
    },
    socialIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    socialText: {
        color: '#333',
        fontSize: 14,
    },
    orText: {
        fontSize: 14,
        color: '#666',
        marginVertical: 10,
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        color: '#333',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 15,
    },
    eyeIcon: {
        fontSize: 18,
        color: '#4a5d72',
    },
    signupButton: {
        backgroundColor: '#4a5d72',
        width: '90%',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    signupButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    footer: {
        marginTop: 20,
        fontSize: 14,
        color: '#666',
    },
    linkText: {
        color: '#4a5d72',
        fontWeight: '700',
    },
    copyright: {
        position: 'absolute',
        bottom: 10,
        fontSize: 12,
        color: '#555',
    },
});

export default Signup;
