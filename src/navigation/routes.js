import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Gainer from '../screen/Gainer';
import Loser from '../screen/Loser';
import BottomTab from './bottomtab';
import Details from '../screen/Details';
import Splash from '../screen/SplashScreen';
import GainerCards from '../components/GainersCards';
import SearchBar from '../components/SearchBar';
import Search from '../screen/Search';
import {selectTheme, toggleTheme} from '../redux/slice/themeSlice';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  //   const [theme, setTheme] = useState(colorScheme);
  const theme = useSelector(selectTheme);

  useEffect(() => {
    // setTheme(colorScheme);
    dispatch(toggleTheme(colorScheme));
  }, [colorScheme]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen
          name={'BottomTab'}
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Details'}
          component={Details}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Gainer'}
          component={Gainer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Loser'}
          component={Loser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Gainercards'}
          component={GainerCards}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Search'}
          component={Search}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
