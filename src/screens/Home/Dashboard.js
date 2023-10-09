//imports
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';

//imports
import {Card1Data, cardData2, cardData3} from '../../config/Data';
import DashboardCard from '../../components/Container/DashboardCard';
import HomeContainer from '../../components/Container/HomeContainer';
import DashboardContainer from '../../components/Container/DashboardContainer';
import DashboardCard1 from '../../components/Container/DashboardCard1';
import DashboardCard2 from '../../components/Container/DashboardCard2';
import {windowHeight, windowWidth} from '../../config/Dimensions';
import {scale} from 'react-native-size-matters';
import {colors, images, sizes} from '../../config/Extras';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#1E272E'} barStyle="light-content" />
      {/* //For Top Section Container */}
      <HomeContainer />
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}>
        {/* //For My Playlists Section */}
        <FlatList
          data={Card1Data}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item}
          renderItem={item => {
            return (
              <>
                <DashboardCard
                  isShow={true}
                  txt1={item?.item?.text1}
                  txt2={item?.item?.text2}
                  chooseImage={item?.item?.image}
                />
              </>
            );
          }}
        />
        {/* //For Button and Search Section */}
        <DashboardContainer />

        {/* //For Recently Played Section */}
        <FlatList
          data={cardData2}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item}
          renderItem={item => {
            return (
              <>
                <DashboardCard1
                  txt1={item?.item?.text1}
                  avatarImage={item?.item?.image}
                />
              </>
            );
          }}
        />

        {/* //For Wrapped Container Section */}
        <DashboardCard2 />

        {/* //For Featured Section */}
        <View style={styles.containerStyle}>
          <Text style={styles.headingStyle}>FEATURED</Text>
          <View style={styles.containerStyle}>
            <Image source={images.picture} />
          </View>
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.headingStyle}>POPULAR</Text>
        </View>

        {/* //For Popular Container Section */}
        <FlatList
          data={cardData3}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item}
          renderItem={item => {
            return (
              <>
                <DashboardCard
                  borderStyle={{borderRadius: sizes.m25}}
                  isTextShow={true}
                  style={styles.cardStyle1}
                  myStyle={styles.cardStyle}
                  text1={item?.item?.text1}
                  text2={item?.item?.text2}
                  chooseImage={item?.item?.image}
                />
              </>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E272E',
  },

  cardStyle: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.2,
    left: scale(5),
    borderRadius: sizes.m25,
  },

  cardStyle1: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.2,
  },

  headingStyle: {
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    fontSize: 24,
    marginHorizontal: scale(14),
  },

  containerStyle: {
    marginTop: '7%',
  },
});

export default Dashboard;
