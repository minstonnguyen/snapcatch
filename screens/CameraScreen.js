import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';
import BottomBar from '../components/BottomBar';
import { Permissions } from 'expo';

class CameraScreen extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      image: null,
      type: Camera.Constants.Type.back,
      flash: Camera.Constants.FlashMode.off,
    };
    this.cameraRef = React.createRef();
  }

  async componentDidMount() {
    try{
      const { status: cameraStatus } = await Permissions.askAsync(Permissions.CAMERA);
      const { status: mediaLibraryStatus } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

      this.setState({
        hasCameraPermission: cameraStatus === 'granted',
        hasMediaLibraryPermission: mediaLibraryStatus === 'granted',
      });
  }
    catch (error) {
      console.error(error); // Log the error for debugging purposes
      // Handle the error or simply ignore it if it's not critical
    }
  }

  takePicture = async () => {
    if (this.cameraRef) {
      try {
        const data = await this.cameraRef.current.takePictureAsync();
        console.log(data);
        this.setState({ image: data.uri });
      } catch (error) {
        console.log(error);
      }
    }
  };

  savePicture = async () => {
    const { image } = this.state;
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert('Picture saved! 🎉');
        this.setState({ image: null });
        console.log('saved successfully');
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { hasCameraPermission, image, type, flash } = this.state;

    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={styles.container}>
        {!image ? (
          <Camera
            style={styles.camera}
            type={type}
            ref={this.cameraRef}
            flashMode={flash}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}
            >

            </View>
          </Camera>
        ) : (
          <Image source={{ uri: image }} style={styles.camera} />
        )}

        <View style={styles.controls}>
          {image ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 50,
              }}
            >
              <Button
                title="Re-take"
                onPress={() => this.setState({ image: null })}
                icon="retweet"
              />
              <Button title="Save" onPress={this.savePicture} icon="check" />
            </View>
          ) : (
            <View >
              <Button
                title="Take a picture"
                onPress={this.takePicture}
                icon="camera"
              />
              <BottomBar />
            </View>

          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 10,
  },
  controls: {
    flex: 0.5,
    paddingBottom: 8
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
});

export default CameraScreen;