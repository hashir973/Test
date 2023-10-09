//imports
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../config/Dimensions';
import {scale} from 'react-native-size-matters';
import {ImageBackground} from 'react-native';
import {colors, sizes} from '../../config/Extras';

const CARD_WIDTH = windowWidth * 0.44;
const CARD_HEIGHT = windowHeight * 0.24;

const DashboardCard = ({
  txt1,
  txt2,
  chooseImage,
  myStyle,
  style,
  isShow,
  isTextShow,
  text1,
  text2,
  borderStyle
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.cardStyle, {...myStyle}]}>
        <ImageBackground
          source={chooseImage}
          resizeMode="contain"
          style={[styles.imageStyle, {...style}]}
          imageStyle={[{borderRadius: sizes.m15}, {...borderStyle}]}></ImageBackground>

        {isShow ? (
          <View
            style={{
              width: CARD_WIDTH,
            }}>
            <Text style={[styles.textStyle1, {fontSize: sizes.m16}]}>
              {txt1}
            </Text>
            <Text style={styles.textStyle1}>{txt2}</Text>
          </View>
        ) : null}
      </TouchableOpacity>

      {isTextShow ? (
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle2}>{text1}</Text>
          <Text style={[styles.textStyle2, {fontSize: sizes.m13, fontFamily: 'Poppins-Light' }]}>{text2}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: 11,
  },

  textStyle2: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: sizes.m16,
  },

  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.m15,
    justifyContent: 'flex-end',
    padding: scale(8),
    backgroundColor: colors.black,
    marginTop: scale(14),
    marginHorizontal: scale(10),
    backgroundColor: 'black',
  },
  imageStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    opacity: 0.7,
    position: 'absolute',
  },

  containerStyle:{
    marginBottom: scale(60),
    padding: scale(15),
    marginHorizontal: scale(6)
  }
});

export default DashboardCard;
