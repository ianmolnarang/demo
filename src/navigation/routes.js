import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Gainer from '../screen/Gainer';
import Loser from '../screen/Loser';
import BottomTab from './bottomtab';
import Details from '../screen/Details';
import Splash from '../screen/SplashScreen';
import GainerCards from '../components/GainersCards';

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
                <Stack.Screen
                    name={"Gainer"}
                    component={Gainer}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Loser"}
                    component={Loser}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Gainercards"}
                    component={GainerCards}
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
