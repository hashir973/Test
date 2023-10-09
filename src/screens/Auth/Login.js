//imports
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StatusBar,
} from 'react-native';

//imports
import {scale, verticalScale} from 'react-native-size-matters';
import {colors, images, sizes} from '../../config/Extras';
import Input from '../../components/InputFields/Input';
import MainButton from '../../components/Buttons/MainButton';
import PasswordInput from '../../components/InputFields/PasswordInput';
import FooterStyle from '../../components/Container/FooterStyle';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#1E272E'} barStyle="light-content" />
      <View style={styles.logoContainer}>
        <ImageBackground source={images.loginImage} style={styles.logo}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <View style={styles.headerRight}>
              <Text style={styles.rightText}>SIGN IN</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.curve}>
        <View style={styles.topText}>
          <Text style={styles.headerText}>Welcome!</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* //For Inputs Fields */}
          <View style={{marginTop: verticalScale(15)}}>
            <Text style={styles.inputText}>Email</Text>
            <Input
              placeholderText="Enter Your Email"
              name={'mail'}
              size={21}
              isIconShow={true}
              keyboardType="email-address"
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            <Text style={styles.inputText}>Password</Text>

            <PasswordInput
              placeholderText="Enter Your Password"
              secureTextEntry={true}
              name={'unlock'}
              size={21}
              sizeEndIcon={20}
              isShow={true}
            />
          </View>
          <View style={styles.passContainer}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.passText}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
          {/* //For Button */}
          <View style={{marginTop: scale(30)}}>
            <MainButton
              textColor="white"
              btnLabel={'Sign In'}
              Press={() => {
                navigation.navigate('Dashboard');
              }}
            />
          </View>
          {/* //For SignupNavigation Opt */}

          <FooterStyle
            text1={'Sign in with'}
            text2={"Don't have an account? "}
            text3={'Sign Up'}
            Press={() => {
              navigation.navigate('Signup');
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  logoContainer: {
    backgroundColor: colors.inputColor,
    height: '30%',
  },

  topText: {
    alignItems: 'center',
    marginTop: '10%',
  },

  headerText: {
    fontFamily: 'Poppins-Bold',
    color: colors.white,
    fontSize: 28,
    marginBottom: verticalScale(30),
  },

  inputText: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: sizes.m15,
    marginHorizontal: scale(20),
    marginBottom: scale(7),
  },

  passContainer: {
    alignSelf: 'flex-end',
    marginHorizontal: scale(20),
    marginTop: scale(14),
  },

  passText: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontWeight: '600',
    fontSize: sizes.m15,
  },

  rightText: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: sizes.m18,
  },

  curve: {
    flex: 1,
    marginTop: -48,
    backgroundColor: colors.primary,
    borderTopLeftRadius: sizes.m50,
    borderTopRightRadius: sizes.m50,
  },

  logo: {
    height: '100%',
    width: '100%',
  },

  headerRight: {
    padding: sizes.m8,
    marginHorizontal: sizes.m20,
    marginVertical: sizes.m20,
  },
});

export default Login;
