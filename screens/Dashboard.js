import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import Map from '../screens/Map';
import CameraScreen from '../screens/CameraScreen';
import Catches from '../screens/Catches';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D882D',
  },
});

const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Menu
            routes={[
              { component: Map },
              { component: CameraScreen },
              { component: Catches },
            ]}
            initialIndex={1} // Make sure to adjust the initialIndex if necessary
          />
        </View>
      );
  };
  

export default Dashboard;