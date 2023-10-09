//imports
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {scale} from 'react-native-size-matters';
import {colors, sizes} from '../../config/Extras';

export default function PasswordInput({
  placeholderText,
  name,
  size,
  isShow,
  sizeEndIcon,
  onChangeText,
  id,
  value,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View
      style={[
        styles.formWrapper,
        {borderColor: isFocus ? colors.white : colors.inputColor},
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign
          name={name}
          size={size}
          color={colors.white}
          style={{paddingRight: 5}}
        />

        <TextInput
          id={id}
          value={value}
          style={styles.textBox}
          placeholder={placeholderText}
          placeholderTextColor={colors.white}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          secureTextEntry={!isOpen}
          onChangeText={onChangeText}
        />
      </View>

      {isShow ? (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
          activeOpacity={0.6}>
          <FontAwesome
            name={isOpen ? 'eye' : 'eye-slash'}
            size={sizeEndIcon}
            color={isFocus ? colors.white : '#808080'}
            onPress={() => {
              setIsOpen(!isOpen);
            }}
          />
        </TouchableOpacity>
      ) : null}
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
  },

  textBox: {
    fontFamily: 'Poppins-Regular',
    fontSize: sizes.m16,
    color: colors.white,
    fontWeight: '600',
    width: '87%',
    top: '1%',
  },
});
