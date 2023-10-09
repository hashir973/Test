//import
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from './Extras';


//For Back Option
const icons = {
  backIcon: () => (
    <Ionicons
      name="chevron-back-sharp"
      size={22}
      color={colors.white}
      resizeMode="contain"
    />
  ),
};

export default icons;
