import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import Map from '../screens/Map';
import CameraScreen from '../screens/CameraScreen';
import BottomBar from '../components/BottomBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D882D',
  },
});

const Catches = () => {
    return (
        <View style={styles.container}>
          <Text>Catches</Text>
          <BottomBar />
        </View>
      );
  };
  

export default Catches;