//imports
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dashboard from '../../screens/Home/Dashboard';
import Library from '../../screens/Home/Library';
import Profile from '../../screens/Home/Profile';
import {colors} from '../../config/Extras';
import {windowHeight} from '../../config/Dimensions';
import NavigationHeader from './NavigationHeader';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';

const Tab = createBottomTabNavigator();
const StackHome = createNativeStackNavigator();
const StackLibrary = createNativeStackNavigator();
const StackProfile = createNativeStackNavigator();

//For Dashboard Screen Stack
function HomeNavigationContainer() {
  return (
    <StackHome.Navigator screenOptions={{headerShown: false}}>
      <StackHome.Screen
        name="DashBoard"
        component={Dashboard}
        options={({navigation}) => ({
          title: '',
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <NavigationHeader
                title={'DashBoard'}
                navigation={navigation}
                isBack={false}
              />
            );
          },
          headerStyle: {
            backgroundColor: colors.primary1,
          },
        })}
      />
    </StackHome.Navigator>
  );
}

function LibraryNavigationContainer() {
  return (
    <StackLibrary.Navigator screenOptions={{headerShown: true}}>
      <StackLibrary.Screen
        name="Library"
        component={Library}
        options={({navigation}) => ({
          title: '',
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <NavigationHeader
                title={'Search'}
                navigation={navigation}
                isBack={true}
              />
            );
          },

          headerStyle: {
            backgroundColor: colors.white,
          },
        })}
      />
    </StackLibrary.Navigator>
  );
}

function ProfileNavigationContainer() {
  return (
    <StackProfile.Navigator screenOptions={{headerShown: true}}>
      <StackProfile.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          title: '',
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <NavigationHeader
                title={'Profile'}
                navigation={navigation}
                isBack={true}
              />
            );
          },
          headerStyle: {
            backgroundColor: colors.white,
          },
        })}
      />
    </StackProfile.Navigator>
  );
}

//Function for Bottom Tab Color
const TabIcon = ({focused}) => {
  if (focused) {
    return (
      <View style={styles.icon}>
        <LinearGradient
          colors={['#F46D1F', '#9250A6']}
          style={{width: 40, height: 40, borderRadius: 20}}>
          <Ionicons
            name="home"
            size={24}
            color="white"
            style={{alignSelf: 'center', paddingTop: scale(5)}}
          />
        </LinearGradient>
      </View>
    );
  } else {
    return (
      <View style={styles.icon}>
        <Ionicons name="home" size={24} color="#50575C" />
      </View>
    );
  }
};

//For Bottom Tab Navigator
export default function StackNavigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: true,
          tabBarStyle: {
            backgroundColor: '#171E23',
            position: 'absolute',
            borderColor: '#171E23',
            borderTopEndRadius: 25,
            borderWidth: 0,
            borderTopWidth: 0,
            borderTopStartRadius: 25,
            height: windowHeight * 0.08,
          },
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="DashboardRoot"
          component={HomeNavigationContainer}
          options={{
            headerShown: false,
            title: '',
            tabBarIcon: ({focused}) => <TabIcon focused={focused} />,
          }}
        />

        <Tab.Screen
          name="LibraryRoot"
          component={LibraryNavigationContainer}
          options={{
            headerShown: false,
            title: '',
            tabBarIcon: ({focused}) => (
              <View style={styles.icon}>
                <FontAwesome
                  name="search"
                  size={24}
                  color={focused ? colors.buttonColor1 : '#50575C'}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#FAF9F6',
              elevation: 0,
            },
          }}
        />

        <Tab.Screen
          name="ProfileRoot"
          component={ProfileNavigationContainer}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.icon}>
                <FontAwesome
                  name="user-circle"
                  size={24}
                  color={focused ? colors.buttonColor1 : '#50575C'}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    paddingLeft: 6,
  },
});
