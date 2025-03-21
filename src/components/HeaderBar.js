import React, { useRef, useEffect } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, Animated, Easing } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/slice/themeSlice';

const HeaderBar = ({ screenWidth }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const theme = useSelector(selectTheme);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -screenWidth * 2],
  });

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Animated.View style={{ flexDirection: 'row', transform: [{ translateX }] }}>
        <View style={[styles.seccard, { borderColor: theme.text }]}>
          <Text style={[styles.main, { color: theme.text }]}>NIFTY 50</Text>
          <Text style={{ color: theme.text }}>24,010.60 -33.90(0.14%)</Text>
        </View>
        <View style={[styles.seccard, { borderColor: theme.text }]}>
          <Text style={[styles.main, { color: theme.text }]}>Bank NIFTY</Text>
          <Text style={{ color: theme.text }}>24,010.60 -33.90(0.14%)</Text>
        </View>
        <View style={[styles.seccard, { borderColor: theme.text }]}>
          <Text style={[styles.main, { color: theme.text }]}>BSE Sensex</Text>
          <Text style={{ color: theme.text }}> 24,010.60 -33.90(0.14%)</Text>
        </View>
        <View style={[styles.seccard, { borderColor: theme.text }]}>
          <Text style={[styles.main, { color: theme.text }]}>NIFTY 50</Text>
          <Text style={{ color: theme.text }}>24,010.60 -33.90(0.14%)</Text>
        </View>
        <View style={[styles.seccard, { borderColor: theme.text }]}>
          <Text style={[styles.main, { color: theme.text }]}>Bank NIFTY</Text>
          <Text style={{ color: theme.text }}>24,010.60 -33.90(0.14%)</Text>
        </View>
        <View style={[styles.seccard, { borderColor: theme.text }]}>
          <Text style={[styles.main, { color: theme.text }]}>BSE Sensex</Text>
          <Text style={{ color: theme.text }}>24,010.60 -33.90(0.14%)</Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

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
      headerText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 8,
      },
      seccard: {
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

export default HeaderBar;