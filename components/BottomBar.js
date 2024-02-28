// CustomBottomBar.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PhishingIcon from '@mui/icons-material/Phishing';

const BottomBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Maps')}
      >
        <MaterialIcons name="explore" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('CameraScreen')}
      >
        <MaterialIcons name="photo-library" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Catches')}
      >
        
        <MaterialIcons name="waves" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 8,
    bottom:0,
    
  },
  iconContainer: {
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 24, // Adjust size as needed
    color: 'black', // Adjust color as needed
  },
});

export default BottomBar;
