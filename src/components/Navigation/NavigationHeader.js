//imports
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import icons from '../../config/icons';
import { scale } from 'react-native-size-matters';

//For Back Navigation
const NavigationHeader = ({title, isBack}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {isBack ? (
            <TouchableOpacity
              style={{
                width: 27,
                height: 27,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: '#373F45',
                opacity: 0.6,
              }}
              onPress={() => navigation.goBack()}>
              {icons.backIcon()}
            </TouchableOpacity>
          ) : null}

          <Text
            style={{
              fontSize: 20,
              marginLeft: scale(10),
              fontWeight: 'bold',
              color: '#171E23',
            }}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NavigationHeader;
