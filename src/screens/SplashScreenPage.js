//imports
import React, {useEffect, useRef} from 'react';
import {Image, StyleSheet, StatusBar, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../config/Extras';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <LinearGradient colors={['#F46D1F', '#9250A6']} style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#F46D1F" />
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
          },
        ]}>
        <Image source={images.logo} style={styles.logo} />
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
