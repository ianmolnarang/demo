import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { Data } from '../helper/DataSample';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/slice/themeSlice';
import colors from '../assets/colors';
import config from '../helper/config'

const Card = ({ navigation }) => {
    const theme = useSelector(selectTheme);
    const [losers, setLosers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [offset, setOffset] = useState(0);

    // Use static data for testing due to API rate limit

    useEffect(() => {
        setLosers(Data.top_losers);
    }, []);

    // useEffect(() => {
    //   fetchTopLosers();
    // }, []);

    const fetchTopLosers = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await axios.get(
                `${config.baseUrl}${config.topGainersQuery}&apikey=${config.apiKey}`
            );
            const topGainers = response.data.top_gainers;
            console.log("Here are the top-losers:", topGainers);
            setLosers(topGainers);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching top gainers:', error);
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        if (!loadingMore) {
            setLoadingMore(true);
            setOffset(offset + 10);
            // fetchTopLosers();
            setLoadingMore(false);
        }
    };

    const renderFooter = () => {
        return loadingMore ? (
            <View style={{ paddingVertical: 20 }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        ) : null;
    };

    const renderCard = ({ item }) => (
        <TouchableOpacity
            style={styles.cardContainer}
            activeOpacity={0.8}
            onPress={() =>
                navigation.navigate('Details', {
                    companyName: item.ticker,
                    companyPrice: item.price,
                })
            }>
            <View style={[styles.card, { backgroundColor: theme.textrevgrey }]}>
                <View style={styles.header}>
                    <Image
                        style={styles.companieslogo}
                        source={require('../assets/images/logoo.png')}
                    />
                </View>
                <View>
                    <Text style={[styles.subtitle, { color: theme.text }]}>{item.ticker}</Text>
                    <Text style={[styles.priceText, { color: theme.text }]}>${item.price}</Text>
                    <Text style={[styles.graphText, { color: theme.text }]}>{item.change_percentage}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={losers}
            renderItem={renderCard}
            keyExtractor={item => item.ticker}
            contentContainerStyle={styles.flatlistContainer}
            key={2}
            numColumns={2}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            removeClippedSubviews={true}
            initialNumToRender={2}
            maxToRenderPerBatch={1}
            updateCellsBatchingPeriod={100}
            windowSize={10}
            ListFooterComponent={renderFooter}
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
        maxWidth: '50%',
    },
    card: {
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
        height: 27,
        width: 100,
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
    },
});

export default Card;
