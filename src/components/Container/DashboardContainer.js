//imports
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SearchBar from '../Container/SearchBar';
import MainButton from '../Buttons/MainButton';
import {scale} from 'react-native-size-matters';
import {colors, sizes} from '../../config/Extras';

const DashboardContainer = ({avatarImage, txt1}) => {
  return (
    <View>
      <View style={styles.searchStyle}>
        <MainButton
          textColor="white"
          btnLabel={'EXPLORE'}
          myStyle={styles.buttonStyle}
        />

        <SearchBar
          placeholderText="Search Your So..."
          name={'search-outline'}
          name1={'cross'}
          size={21}
          sizeEndIcon={24}
        />
      </View>

      <View style={{marginTop: '7%'}}>
        <Text style={styles.headingStyle}>RECENTLY PLAYED</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '7%',
  },

  buttonStyle: {
    marginHorizontal: scale(7),
    borderRadius: sizes.m25,
    paddingHorizontal: scale(25),
    padding: scale(10),
  },

  headingStyle: {
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    fontSize: 24,
    marginHorizontal: scale(14),
  },
});

export default DashboardContainer;
