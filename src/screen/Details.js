import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import Graph from '../components/Graph';
import {companyDetails} from '../helper/companyDetails'; // Assuming this contains initial static data
import {SafeAreaView} from 'react-native-safe-area-context';
import StockChartComponent from '../components/newGraph';
import {useSelector} from 'react-redux';
import {selectTheme} from '../redux/slice/themeSlice';
import axios from 'axios';
import config from '../helper/config';

const Details = ({route, navigation}) => {
  const {companyName, companyPrice} = route.params;
  const [companyData, setCompanyData] = useState(null);
  const theme = useSelector(selectTheme);

  useEffect(() => {
    fetchCompanyDetails(companyName);
  }, [companyName]);

  const fetchCompanyDetails = async companyName => {
    try {
      const response = await axios.get(
        `${config.baseUrl}${config.companyOverviewQuery}&symbol=${companyName}&apikey=${config.apiKey}`,
      );
      console.log(response.data);
      setCompanyData(response.data);
    } catch (error) {
      console.error('Error fetching company details:', error);
    }
  }

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={[styles.topheader, {borderColor:theme.text}]}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
        <Text style={[styles.headerText, {color:theme.text}]}>Details</Text>
        <SearchBar navigation={navigation} />
      </View>
      <View style={styles.secheader}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../assets/images/google.png')}
          />
          <Text style={[styles.headerText , {color:theme.text}]}>{companyName}</Text>
        </View>
        <Text style={[styles.headerText, {color:theme.text}]}>$ {companyPrice}</Text>
      </View>

      <View style={styles.graph}>
        <Graph />
      </View>

      <ScrollView>
        <View style={styles.aboutContainer}>
          <Text
            style={[styles.aboutCompany, {color:theme.text, borderColor: theme.text}]}>
            About {companyName}
          </Text>
          {companyData ? (
            <>
            <Text style={{marginLeft: 5, fontSize: 12, color:theme.text}}>
                {companyData.Description}
              </Text>
              <ScrollView horizontal>
                <View style={{flexDirection: 'row', margin: 10}}>
                  <Text style={[styles.chip,{ color: theme.textrev} ]}>
                    Industry: {companyData.Industry}
                  </Text>
                  <Text  style={[styles.chip,{ color: theme.textrev} ]}>Sector: {companyData.Sector}</Text>
                </View>
              </ScrollView>

              {/* Additional company information rendering */}

              <View
                style={{
                  margin: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={[styles.informationHeading, { color: theme.text}]}>52 Week High</Text>
                  <Text style={[styles.informationHeadingAns, { color: theme.text}]}>
                    ${companyData['52WeekHigh']}
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={[styles.informationHeadingAns, {marginBottom: 8, color: theme.text}]}>
                    {' '}
                    Current Price ${companyPrice}
                  </Text>
                  <View
                    style={[{width: 125, height: 2, backgroundColor: theme.text}]}
                  />
                </View>
                <View>
                <Text style={[styles.informationHeading, { color: theme.text}]}>52 Week Low</Text>
                  <Text style={[styles.informationHeadingAns, { color: theme.text}]}>
                    ${companyData['52WeekLow']}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  margin: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={[styles.informationHeading, { color: theme.text}]}>Market Cap</Text>
                  <Text style={[styles.informationHeadingAns, { color: theme.text}]}>
                    ${companyData.MarketCapitalization}
                  </Text>
                </View>
                <View>
                <Text style={[styles.informationHeading, { color: theme.text}]}>Profit Margin</Text>
                  <Text style={[styles.informationHeadingAns, { color: theme.text}]}>
                    {companyData.ProfitMargin}
                  </Text>
                </View>
                <View>
                <Text style={[styles.informationHeading, { color: theme.text}]}>Beta</Text>
                  <Text style={[styles.informationHeadingAns, { color: theme.text}]}>
                    {companyData.Beta}
                  </Text>
                </View>
              </View>

              <View
                style={{margin: 10, flexDirection: 'row', marginBottom: 30}}>
                <View>
                <Text style={[styles.informationHeading, { color: theme.text}]}>Dividend Yield</Text>
                <Text style={[styles.informationHeadingAns, { color: theme.text}]}>
                    {companyData.DividendYield}
                  </Text>
                </View>
                <View style={{marginLeft: 55}}>
                <Text style={[styles.informationHeading, { color: theme.text}]}>P/E Ratio</Text>
                <Text style={[styles.informationHeadingAns, { color: theme.text}]}>
                    {companyData.PERatio}
                  </Text>
                </View>
              </View>
            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topheader: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  logo: {
    height: 40,
    width: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 8,
    marginRight: 30,
    alignItems:'center'
  },
  secheader: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  aboutContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
  graph: {
    margin: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    borderColor: 'grey',
    shadowRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  chip: {
    backgroundColor: '#edd4c6',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  informationHeading: {
    fontWeight: '700',
    fontSize: 14,
    color: 'black',
  },
  informationHeadingAns: {
    fontWeight: '500',
    fontSize: 13,
    color: 'black',
  },
  aboutCompany:{
    marginLeft: 5,
    borderBottomWidth: 0.5,
    fontWeight: '700',
    fontSize: 16,
  }

});

export default Details;
