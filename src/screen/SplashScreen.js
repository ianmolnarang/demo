import React, { useEffect } from 'react';
import { View, StyleSheet , Image} from 'react-native';
import BottomTab from '../navigation/bottomtab';

function Splash({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            now();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const now = () => {
        navigation.navigate(BottomTab);
    };

    return (
        <View style={styles.container}>
           <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Splash;
