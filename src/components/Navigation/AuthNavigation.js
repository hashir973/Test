//imports
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigation from './StackNavigation';
import Login from '../../screens/Auth/Login';
import Signup from '../../screens/Auth/Signup';
import NavigationHeader from './NavigationHeader';

const Stack = createNativeStackNavigator();

//For Auth Stack
export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={() => ({
          title: '',
          headerShadowVisible: false,

          headerStyle: {
            backgroundColor: '#1E272E',
          },
        })}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({navigation}) => ({
          title: '',
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <NavigationHeader
                title={''}
                navigation={navigation}
                isBack={true}
              />
            );
          },
          headerStyle: {
            backgroundColor: '#1E272E',
          },
        })}
      />
      <Stack.Screen name="Dashboard" component={StackNavigation} />
    </Stack.Navigator>
  );
}
