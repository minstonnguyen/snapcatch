import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ImageBackground, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { signIn } from '../services/api';
import { Alert } from 'react-native';
import imageSmithRiver from '../images/smithriveraigeneratedskycropped.png';
import { FontAwesome } from '@expo/vector-icons';
//"email": "newemail@binge.app",
//"password": "ExtraLongPassword"

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state


  const handleSignIn = async() => {
    navigation.navigate('CameraScreen')
    /*
    try {
      setIsLoading(true);
      const result = await signIn(email, password);
      global.globalUserID = result.text.data.id; //global User ID
      global.globalAccessToken = result.text.access_token;
      console.log('Login successful');
      //console.log('Result', result);
      
      console.log("ID: ", globalUserID);
      console.log("AccessToken: ", globalAccessToken);
      navigation.navigate('Sessions', {AccessToken: result.text.access_token, user_id: result.text.data.id});
    } catch (error) {
      console.error('Login failed', error.message);
      Alert.alert(
        "Login Failed",
        "Your email or password is incorrect. Please try again.",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ]
      );
     }finally {
      setIsLoading(false);
    }
    
    if (email && password) {
      
      console.log('Email:', email);
      console.log('Password:', password);
      
      
    }
    */
    
  };

  useEffect(() => {
    return () => {
      // Reset loading state when the component unmounts
      setIsLoading(false);
    };
  }, []);

  return (
    <ImageBackground source={imageSmithRiver} style={styles.backgroundImage}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.card}>
          <Text style={styles.title}>Snapcatch</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!isPasswordVisible}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignIn} disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex:  1,
        resizeMode: 'cover', // or 'stretch'
        justifyContent: 'center',
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   },
  card: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  title: {
    fontSize: 28, // Increase font size to match the home page
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#005AA7', // Match the theme color
  },
  input: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16, // Increase padding
    marginBottom: 20, // Increase margin
    borderRadius: 10, // Make input fields more rounded
  },
  button: {
    backgroundColor: '#005AA7',
    padding: 16,
    borderRadius: 30, // Make the button oval
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
