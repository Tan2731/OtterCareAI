import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
    const navigation = useNavigation();

    const handleGetStarted = () => {
        navigation.navigate('ChatBox'); // Change 'NextScreen' to your desired route
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../images/logo.png')} // Add your image to assets folder
                style={styles.logo}
            />
            <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5A6B81', // Matching the background color
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#D8DEE9',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#BCCCDC',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    buttonText: {
        fontSize: 18,
        color: '#2E4057',
        fontWeight: '600',
        letterSpacing: 1,
    },
});

export default LandingPage;
