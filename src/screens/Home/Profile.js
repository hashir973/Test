//imports
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Profile;
