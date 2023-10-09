//imports
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors, sizes} from '../../config/Extras';
import LinearGradient from 'react-native-linear-gradient';

export default function MainButton({btnLabel, Press, myStyle, txtStyle}) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={Press}>
      <LinearGradient
        colors={['#F46D1F', '#9250A6']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[
          styles.button,
          {
            ...myStyle,
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: colors.white,
              ...txtStyle,
            },
          ]}>
          {btnLabel}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.m15,
    alignItems: 'center',
    padding: scale(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.5,
    elevation: 6,
    marginHorizontal: scale(15),
  },

  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
    fontWeight: '600',
    color: colors.white,
    top: '3%',
  },
});
