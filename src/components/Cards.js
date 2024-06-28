import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';


const Card = ({navigation}) => {
    return (
      <TouchableOpacity style={styles.cardContainer} activeOpacity={0.8} >
        <View style={styles.card}>
          <View style={styles.header}>
            <Image style={styles.companieslogo} source={require('../assets/images/google.png')} />
          </View>
          <View>
            <Text style={styles.subtitle}>Google</Text>
            <Text style={styles.priceText}>$100</Text>
            <Text style={styles.graphText}>+0.41%</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 14,
        width: 170,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        right:10,
        marginBottom:10
      },
      companieslogo: {
        height: 40,
        width: 40,
        right: 50,
        marginLeft:20,


      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green',
      },
      subtitle: {
        fontSize: 18,
        color: 'black',
        right:20,
        marginTop:10,

      },
      priceText: {
        fontSize: 15,
        color: '#444444',
        right: 60,
        marginLeft:40,
        marginTop: 10,
      },
      graphText:{
        fontSize: 15,
        color: '#444444',
        right: 60,
        marginLeft:40
      }
});

export default Card;