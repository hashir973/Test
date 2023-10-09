//imports
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors, sizes} from '../../config/Extras';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function IconButton({
  btnLabel,
  Press,
  myStyle,
  txtStyle,
  iconName,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={Press}
      style={[
        styles.button,
        {
          ...myStyle,
        },
      ]}>
      <AntDesign
        name={iconName}
        size={26}
        color={colors.white}
        resizeMode="contain"
        style={{paddingRight: scale(4), justifyContent: 'center'}}
      />
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.m20,
    backgroundColor: '#1E272E',
    alignItems: 'center',
    alignSelf: 'center',
    padding: scale(13),
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    paddingHorizontal: scale(25),
    marginHorizontal: scale(5),
    marginBottom: scale(12),
  },

  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: sizes.m16,
    fontWeight: '600',
    color: colors.white,
    top: '3%',
  },
});
