import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { topGainersData } from '../helper/DataSample';
import Details from '../screen/Details';

const Card = ({ navigation }) => {
    const [gainers, setGainers] = useState([]);

    useEffect(() => {
        setGainers(topGainersData.top_gainers);
    }, []);

    // useEffect(() => {
    //     const fetchTopGainers = async () => {
    //         try {
    //             const response = await axios.get('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=4LDFPNLCC471U23J');
    //             const topGainers = response.data.top_gainers;
    //             console.log(response)
    //             setGainers(topGainers);
    //         } catch (error) {
    //             console.error('Error fetching top gainers:', error);
    //         }
    //     };

    //     fetchTopGainers();
    // }, []);


    const renderCard = ({ item }) => (
        <TouchableOpacity style={styles.cardContainer} activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', { companyName: item.ticker , companyPrice: item.price})}
        >
            <View style={styles.card}>
                <View style={styles.header}>
                    <Image style={styles.companieslogo} source={require('../assets/images/google.png')} />
                </View>
                <View>
                    <Text style={styles.subtitle}>{item.ticker}</Text>
                    <Text style={styles.priceText}>${item.price}</Text>
                    <Text style={styles.graphText}>{item.change_percentage}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={gainers}
            renderItem={renderCard}
            keyExtractor={(item) => item.ticker}
            contentContainerStyle={styles.flatlistContainer}
            key={2}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    flatlistContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    cardContainer: {
        flex: 1,
        margin: 10,
        maxWidth: '50%', // 2 cards per row
    },
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
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
    },
    companieslogo: {
        height: 40,
        width: 40,
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green',
    },
    subtitle: {
        fontSize: 18,
        color: 'black',
        marginTop: 10,
    },
    priceText: {
        fontSize: 15,
        color: '#444444',
        marginTop: 10,
    },
    graphText: {
        fontSize: 15,
        color: '#444444',
    }
});

export default Card;
