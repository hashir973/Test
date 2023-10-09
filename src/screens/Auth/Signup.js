//imports
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

//imports
import {scale, verticalScale} from 'react-native-size-matters';
import {colors, images, sizes} from '../../config/Extras';
import Input from '../../components/InputFields/Input';
import MainButton from '../../components/Buttons/MainButton';
import PasswordInput from '../../components/InputFields/PasswordInput';
import FooterStyle from '../../components/Container/FooterStyle';
import {windowHeight} from '../../config/Dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ImageBackground} from 'react-native';
import icons from '../../config/icons';
import {Avatar} from 'react-native-paper';
import {StatusBar} from 'react-native';

const LOGO_SIZE = windowHeight * 0.15;

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#1E272E'} barStyle="light-content" />
      <View style={styles.logoContainer}>
        <ImageBackground source={images.loginImage} style={styles.logo}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={styles.headerContainer}
              onPress={() => navigation.goBack()}>
              {icons.backIcon()}
            </TouchableOpacity>

            <View style={styles.headerRight}>
              <Text style={styles.rightText}>SIGN UP</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.curve}>
        {/* //For SetUp Profile Image */}
        <View style={styles.profile}>
          <View style={styles.profile}>
            <Avatar.Image
              size={120}
              style={{
                backgroundColor: colors.white,
                marginTop: LOGO_SIZE * -0.5,
              }}
              source={images.image3}
            />
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.bottomCircle}>
            <MaterialIcons name="add" size={24} color={colors.black} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* //For Input Fields */}
          <View style={{marginTop: verticalScale(20)}}>
            <Text style={styles.inputText}>First Name</Text>

            <Input
              placeholderText="Enter Your First Name"
              name={'user'}
              size={21}
              isShow={true}
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            <Text style={styles.inputText}>Last Name</Text>
            <Input
              placeholderText="Enter Your Last Name"
              name={'user'}
              size={21}
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            <Text style={styles.inputText}>Phone</Text>
            <Input
              placeholderText="Enter Your Phone No"
              name={'phone'}
              size={21}
              keyboardType="phone-pad"
            />
          </View>
          <View style={{marginTop: verticalScale(20)}}>
            <Text style={styles.inputText}>Email</Text>
            <Input
              placeholderText="Enter Your Email"
              name={'mail'}
              size={21}
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
          {/* //For Button */}
          <View style={{marginTop: '10%'}}>
            <MainButton
              textColor="white"
              btnLabel={'Sign Up'}
              Press={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
          <FooterStyle
            text1={'Sign up with'}
            text2={'Already have an account? '}
            text3={'Sign In'}
            Press={() => {
              navigation.navigate('Login');
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

  inputText: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: sizes.m15,
    marginHorizontal: scale(20),
    marginBottom: scale(7),
  },

  curve: {
    flex: 1,
    marginTop: -48,
    backgroundColor: colors.primary,
    borderTopLeftRadius: sizes.m50,
    borderTopRightRadius: sizes.m50,
  },

  profile: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomCircle: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    right: '35%',
    bottom: 0,
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

  rightText: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: sizes.m18,
  },

  headerContainer: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#373F45',
    opacity: 0.6,
    marginHorizontal: scale(23),
    marginVertical: scale(24),
  },
});

export default Signup;
