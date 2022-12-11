import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';

import {SecondsLogo} from './src/components/logos';
import {
  width,
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
} from './src/helpers/metrics';

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <View style={styles.logoContainer}>
        <SecondsLogo />
        <Text style={styles.title}>Seconds</Text>
      </View>
      <View style={[StyleSheet.absoluteFill, styles.bgImage]}>
        <Image source={require('./assets/images/bg-splash.png')} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>POPULAR SHORT VIDEOS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080C22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  title: {
    fontFamily: 'VisbyRoundCF-Bold',
    color: 'white',
    fontSize: moderateScale(46),
    fontWeight: 'bold',
    marginLeft: horizontalScale(8),
  },
  bgImage: {
    opacity: 0.6,
    transform: [{translateX: -width / 5}, {translateY: -height / 4}],
  },
  descriptionContainer: {
    bottom: verticalScale(68),
    position: 'absolute',
  },
  description: {
    fontFamily: 'VisbyRoundCF-Bold',
    color: 'white',
    fontSize: moderateScale(15),
  },
});
