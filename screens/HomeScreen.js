import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const imageSmithRiver = require('../images/smithriveraigeneratedskycropped.png');
  
    return (     
        <ImageBackground source={imageSmithRiver} style={styles.backgroundImage}> 
            <View style={styles.container}>
                <Image
                    source={require('../images/snapcatchlogo.png')}
                    style={[styles.logo, { transform: [{ scale: 1.1 }] }]}
                    resizeMode="contain"
                />
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('LoginScreen')}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('CreateAccount')}
                    >
                        <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    logo: {
        width: 300,
        height: 85,
        marginBottom: 0,
        
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        
        color: '#005AA7',
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row', // Make buttons horizontal
        justifyContent: 'center',
        marginTop: 'auto',
        marginTop: 0,
    },
    button: {
        width: '45%', // Adjust button width as needed
        height: 60, // Increase button height
        backgroundColor: '#005AA7',
        borderRadius: 30, // Make buttons oval
        justifyContent: 'center',
        marginTop: 0,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
