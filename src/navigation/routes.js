import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Gainer from '../screen/Gainer';
import Loser from '../screen/Loser';
import BottomTab from './bottomtab';
import Details from '../screen/Details';
import Splash from '../screen/SplashScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Splash"}>
                <Stack.Screen
                    name={"BottomTab"}
                    component={BottomTab}
                    options={{
                        headerShown: false,
                    }}
                />
                  <Stack.Screen
                    name={"Details"}
                    component={Details}
                    options={{
                        headerShown: false,
                    }}
                />
                 <Stack.Screen
                    name={"Splash"}
                    component={Splash}
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
