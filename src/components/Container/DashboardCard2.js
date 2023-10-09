//imports
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors, images, sizes} from '../../config/Extras';
import {scale} from 'react-native-size-matters';

const DashboardCard2 = () => {
  return (
    <View>
      <View style={styles.containerStyle}>
        <Text style={styles.headingStyle}>2023 WRAPPED</Text>
      </View>

      <TouchableOpacity activeOpacity={0.7} style={styles.card}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              source={images.image6}
              style={styles.image}
            />
          </View>

          <View
            style={{
              padding: scale(5),
              alignSelf: 'center',
              width: '48%',
            }}>
            <Text style={styles.headingStyle1}>
              SEE WHO YOU LISTENED TO IN 2020
            </Text>
            <Text style={styles.headingStyle2}>
              Your top artists and songs of the year and more..
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    fontSize: 24,
    marginHorizontal: scale(17),
  },

  card: {
    paddingVertical: scale(5),
    backgroundColor: '#414348',
    marginHorizontal: scale(15),
    borderRadius: sizes.m15,
    marginTop: '4%',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 6,
  },

  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    padding: scale(10),
  },
  image: {
    height: scale(150),

    width: scale(150),
  },

  headingStyle1: {
    fontFamily: 'Poppins-Bold',
    color: colors.white,
    fontSize: sizes.m16,
  },

  headingStyle2: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: sizes.m14,
    paddingTop: scale(5),
  },

  containerStyle: {
    marginTop: '7%',
  },
});

export default DashboardCard2;
