import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={require('../images/logo.png')} style={styles.logo} />
                <Text style={styles.title}>OTTERCARE AI</Text>
            </View>

            {/* Form Section */}
            <Text style={styles.createAccount}>Log In</Text>

            {/* Email Field */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Password Field */}
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

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            {/* Footer Links */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.footerText}>
                        Don't have an account? <Text style={styles.linkText}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.footerText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            {/* Footer Copyright */}
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
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
        fontFamily: 'monospace',
    },
    createAccount: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginTop: 30,
        marginBottom: 20,
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
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
    loginButton: {
        backgroundColor: '#4a5d72',
        width: '90%',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    footer: {
        marginTop: 20,
        alignItems: 'center',
    },
    footerText: {
        color: '#666',
        fontSize: 14,
        marginBottom: 5,
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

export default Login;
