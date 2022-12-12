import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SplashScreen as SplashScreenComponent} from './src/screens/SplashScreen';

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <SplashScreenComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080C22',
  },
});
