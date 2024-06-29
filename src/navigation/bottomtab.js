import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Gainer from '../screen/Gainer';
import Loser from '../screen/Loser';
import { Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/slice/themeSlice';

const Tab = createBottomTabNavigator();

function BottomTab() {
  const theme = useSelector(selectTheme);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: 10,
          backgroundColor: theme.textrevgrey
        },
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
      }}
    >
      <Tab.Screen
        name="Gainer"
        component={Gainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image style={styles.logo} source={require('../assets/images/up.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Loser"
        component={Loser}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image style={styles.logo} source={require('../assets/images/down.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 20,
    width: 20,
  }
})


export default BottomTab;