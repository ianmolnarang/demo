import React, { useRef, useEffect } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, Animated, Easing, Dimensions } from 'react-native';
import Cards from '../components/GainersCards';
import Routes from '../navigation/routes';

const screenWidth = Dimensions.get('window').width;

export default function Gainer({navigation}) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 10000, // Duration for one complete cycle
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -screenWidth * 2], // Adjust based on the combined width of the chips
  });

  return (
    <View style={styles.container}>
      <View style={styles.topheader}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        <Text style={styles.headerText}>Stocks</Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Animated.View style={{ flexDirection: 'row', transform: [{ translateX }] }}>
            <View style={styles.seccard}>
              <Text style={styles.main}>NIFTY 50</Text>
              <Text>24,010.60 -33.90(0.14%)</Text>
            </View>
            <View style={styles.seccard}>
              <Text style={styles.main}>Bank NIFTY</Text>
              <Text>24,010.60 -33.90(0.14%)</Text>
            </View>
            <View style={styles.seccard}>
              <Text style={styles.main}>BSE Sensex</Text>
              <Text>24,010.60 -33.90(0.14%)</Text>
            </View>
            {/* Duplicate the chips to create a seamless loop */}
            <View style={styles.seccard}>
              <Text style={styles.main}>NIFTY 50</Text>
              <Text>24,010.60 -33.90(0.14%)</Text>
            </View>
            <View style={styles.seccard}>
              <Text style={styles.main}>Bank NIFTY</Text>
              <Text>24,010.60 -33.90(0.14%)</Text>
            </View>
            <View style={styles.seccard}>
              <Text style={styles.main}>BSE Sensex</Text>
              <Text>24,010.60 -33.90(0.14%)</Text>
            </View>
          </Animated.View>
        </ScrollView>
      </View>

     <View style={{marginTop:20, marginLeft:20}}>
      <Text style={{fontSize:22, fontWeight:'bold', }}>
      Top Gainers
      </Text>
     </View>

      <ScrollView>
        <View style={styles.cardsContainer}>
        <Cards navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topheader: {
    marginTop: 30,
    marginLeft: 20,
    flexDirection: 'row',
  },
  logo: {
    height: 40,
    width: 40,
  },
  // cardsContainer: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  //   marginTop: 20,
  //   marginBottom: 30,
  // },
  headerText: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 8,
  },
  seccard: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  main: {
    color: 'grey',
    fontWeight: 'bold',
  },
});
