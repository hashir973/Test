//imports
import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import {colors, sizes} from '../../config/Extras';

export default function Input({
  placeholderText,
  name,
  size,
  txtStyle,
  myStyle,
  keyboardType,
  isMultiLineTrue,
  onChangeText,
  id,
  value,
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View
      style={[
        styles.formWrapper,
        {borderColor: isFocus ? colors.white : colors.inputColor, ...myStyle},
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign
          name={name}
          size={size}
          color={colors.white}
          style={{paddingRight: sizes.m8}}
        />

        <TextInput
          value={value}
          id={id}
          onChangeText={onChangeText}
          multiline={isMultiLineTrue}
          style={[styles.textBox, {...txtStyle}]}
          placeholder={placeholderText}
          placeholderTextColor={colors.white}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          keyboardType={keyboardType}
          numberOfLines={1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    backgroundColor: colors.inputColor,
    borderWidth: 1.5,
    borderRadius: sizes.m10,
    paddingHorizontal: sizes.m18,
    marginHorizontal: scale(14),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(3),
    marginTop: scale(4),
    borderColor: colors.inputColor
  },

  textBox: {
    fontFamily: 'Poppins-Regular',
    fontSize: sizes.m16,
    color: colors.white,
    fontWeight: '600',
    width: '93%',
    top: '1%'
  },
});
