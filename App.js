import { Image, StyleSheet, Platform, View, Text , ScrollView} from 'react-native';
import Cards from './src/components/GainersCards'
import Routes from './src/navigation/routes'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

 const App = () => {
  return (

        <Routes/>

  );
};

export default App;