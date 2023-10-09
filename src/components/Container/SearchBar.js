//imports
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {scale} from 'react-native-size-matters';
import {colors, sizes} from '../../config/Extras';

export default function SearchBar({
  placeholderText,
  name,
  size,
  sizeEndIcon,
  onChangeText,
  name1,
}) {
  const [searchText, setSearchText] = useState('');

  const clearText = () => {
    setSearchText('');
    if (onChangeText) {
      onChangeText('');
    }
  };

  return (
    <View style={[styles.formWrapper]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons
          name={name}
          size={size}
          color={colors.white}
          style={{paddingRight: scale(4)}}
        />

        <TextInput
          style={styles.textBox}
          placeholder={placeholderText}
          placeholderTextColor={colors.white}
          onChangeText={text => {
            setSearchText(text);
            if (onChangeText) {
              onChangeText(text);
            }
          }}
          value={searchText}
        />
      </View>

      <TouchableOpacity activeOpacity={0.4} onPress={clearText}>
        <Entypo name={name1} size={sizeEndIcon} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    backgroundColor: colors.inputColor,
    borderWidth: 1.5,
    borderRadius: sizes.m25,
    paddingHorizontal: scale(10),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '57%',
    borderColor: colors.inputColor,
    marginRight: scale(6),
  },

  textBox: {
    fontFamily: 'Poppins-Regular',
    fontSize: sizes.m14,
    color: colors.white,
    width: '75%',
    top: '1%',
  },
});
