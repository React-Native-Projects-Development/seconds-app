import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {SecondsLogo} from '../../components/logos';

import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../helpers/metrics';

export const SplashScreen = () => {
  return (
    <>
      <View style={styles.logoContainer}>
        <SecondsLogo />
        <Text style={styles.title}>Seconds</Text>
      </View>
      <View style={[StyleSheet.absoluteFill, styles.bgImage]}>
        <Image source={require('../../../assets/images/bg-splash.png')} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>POPULAR SHORT VIDEOS</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080C22',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
    justifyContent: 'center',
    marginTop: verticalScale(448),
  },
  title: {
    fontFamily: 'VisbyRoundCF-Bold',
    color: 'white',
    fontSize: moderateScale(46),
    fontWeight: 'bold',
    marginLeft: horizontalScale(8),
  },
  bgImage: {
    opacity: 0.4,
    transform: [{translateX: -width / 5}, {translateY: -height / 4}],
  },
  descriptionContainer: {
    bottom: verticalScale(68),
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
  },
  description: {
    fontFamily: 'VisbyRoundCF-Bold',
    color: 'white',
    fontSize: moderateScale(15),
    lineHeight: verticalScale(18),
  },
});
