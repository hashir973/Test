//imports
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/components/Navigation/AuthNavigation';
import SplashScreenPage from './src/screens/SplashScreenPage';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 2500); 
  }, []);

  return (
    <NavigationContainer>
      {isSplashVisible ? (
        <SplashScreenPage />
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};

export default App;








































//Developed by M.Hashir
