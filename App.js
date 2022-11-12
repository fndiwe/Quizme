import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import SelectCategory from './components/SelectCategory';
import Settings from './components/Settings';
import QuizScreen from './components/QuizScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, orientation: 'portrait' }}
        />
        {/* <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} /> */}
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategory}
          options={{ headerShown: false, orientation: 'portrait' }}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{ headerShown: false, orientation: 'portrait' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
