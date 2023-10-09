//imports
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, sizes} from '../../config/Extras';
import {scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const HomeContainer = () => {
  return (
    <View>
      <View style={styles.topStyle}>
        <View>
          <Text style={styles.textStyle}>GOOD MORNING User !</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity activeOpacity={0.6}>
            <LinearGradient
              colors={['#F46D1F', '#9250A6']}
              style={styles.bottomCircle}
              start={{x: 1, y: 0}}
              end={{x: 1, y: 1}}>
              <AntDesign name="search1" size={20} color={colors.white} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.bottomCircle, {backgroundColor: colors.white}]}>
            <Ionicons
              name="reorder-three-outline"
              size={25}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: '5%'}}>
        <Text style={styles.headingStyle}>MY PLAYLISTS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginHorizontal: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: sizes.m17,
  },

  headingStyle: {
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    fontSize: 24,
    marginHorizontal: scale(14),
  },

  topStyle: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(13),
    alignItems: 'center',
  },
});

export default HomeContainer;
