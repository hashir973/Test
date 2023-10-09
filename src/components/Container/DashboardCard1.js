//imports
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {colors, sizes} from '../../config/Extras';
import {Avatar} from 'react-native-paper';

const DashboardCard1 = ({txt1, avatarImage}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} style={styles.profile}>
        <Avatar.Image
          size={120}
          style={{
            backgroundColor: colors.white,
          }}
          source={avatarImage}
        />
      </TouchableOpacity>

      <View style={styles.containerStyle}>
        <Text style={styles.headingStyle}>{txt1}</Text>
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontFamily: 'Poppins-Light',
    color: colors.white,
    fontSize: sizes.m16,
    textAlign: 'center',
  },

  profile: {
    marginTop: scale(5),
    marginHorizontal: scale(13),
  },

  containerStyle: {
    marginTop: scale(8),
  },
});

export default DashboardCard1;
