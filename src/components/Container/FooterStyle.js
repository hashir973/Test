//imports
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import IconButton from '../Buttons/IconButton';
import {colors, sizes} from '../../config/Extras';
import {scale, verticalScale} from 'react-native-size-matters';
import { windowHeight } from '../../config/Dimensions';

const FooterStyle = ({text1, text2, text3, Press}) => {
  return (
    <View>
      <View style={styles.topContainer}>
        <Text
          style={[
            styles.textStyle,
            {fontSize: sizes.m20, textAlign: 'center'},
          ]}>
          - OR -
        </Text>
        <Text style={styles.textStyle}>{text1}</Text>
      </View>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <IconButton
          textColor="white"
          btnLabel="Facebook"
          iconName={'facebook-square'}
        />
        <IconButton textColor="white" btnLabel={'Google'} iconName={'google'} />
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>{text2}</Text>

        <TouchableOpacity onPress={Press}>
          <Text style={styles.footerText}>{text3}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: sizes.m18,
    marginBottom: scale(7),
    marginVertical: scale(5),
  },

  topContainer: {
    alignSelf: 'center',
    marginVertical: scale(18),
  },

  footerContainer: {
    marginTop: windowHeight * 0.03,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: verticalScale(28),
  },

  footerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: sizes.m16,
    fontWeight: '600',
    color: colors.white,
  },
});

export default FooterStyle;
