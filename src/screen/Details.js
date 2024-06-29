import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView , StyleSheet} from 'react-native';
import { SearchBar } from '../components/SearchBar';
import Graph from '../components/Graph';
import { companyDetails } from '../helper/companyDetails'; // Assuming this contains initial static data

const Details = ({ route , navigation}) => {
  const { companyName, companyPrice } = route.params;
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    fetchCompanyDetails(companyName); // Fetch company details on component mount
  }, [companyName]);

  const fetchCompanyDetails = async (companyName) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${companyName}&apikey=4LDFPNLCC471U23J`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch company details');
      }
      const data = await response.json();
      console.log(data);
      setCompanyData(data);
    } catch (error) {
      console.error('Error fetching company details:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topheader}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        <Text style={styles.headerText}>Details</Text>
        <SearchBar navigation= {navigation} />
      </View>
      <View style={styles.secheader}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ height: 30, width: 30 }} source={require('../assets/images/google.png')} />
          <Text style={styles.headerText}>{companyName}</Text>
        </View>
        <Text style={styles.headerText}>$ {companyPrice}</Text>
      </View>

      {/* <View style={styles.graph}>
        <Graph />
      </View> */}

      <ScrollView>
        <View style={styles.aboutContainer}>
          <Text style={{ marginLeft: 5, borderBottomWidth: 0.5, fontWeight: '700', fontSize: 16 }}>
            About {companyName}
          </Text>
          {companyData ? (
            <>
              <Text style={{ marginLeft: 5, fontSize: 12 }}>{companyData.Description}</Text>
              <ScrollView horizontal>
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <Text style={styles.chip}>Industry: {companyData.Industry}</Text>
                <Text style={styles.chip}>Sector: {companyData.Sector}</Text>
              </View>
              </ScrollView>
              {/* Additional company information rendering */}

              <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={styles.informationHeading}>52 Week High</Text>
                  <Text style={styles.informationHeadingAns}>${companyData['52WeekHigh']}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={[styles.informationHeadingAns, { marginBottom: 8 }]}> Current Price ${companyPrice}</Text>
                  <View style={{ width: 125, height: 2, backgroundColor: 'black' }} />
                </View>
                <View>
                  <Text style={styles.informationHeading}>52 Week Low</Text>
                  <Text style={styles.informationHeadingAns}>${companyData['52WeekLow']}</Text>
                </View>
              </View>

              <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={styles.informationHeading}>Market Cap</Text>
                  <Text style={styles.informationHeadingAns}>${companyData.MarketCapitalization}</Text>
                </View>
                <View>
                  <Text style={styles.informationHeading}>Profit Margin</Text>
                  <Text style={styles.informationHeadingAns}>{companyData.ProfitMargin}</Text>
                </View>
                <View>
                  <Text style={styles.informationHeading}>Beta</Text>
                  <Text style={styles.informationHeadingAns}>{companyData.Beta}</Text>
                </View>
              </View>

              <View style={{ margin: 10, flexDirection: 'row', marginBottom: 30 }}>
                <View>
                  <Text style={styles.informationHeading}>Dividend Yield</Text>
                  <Text style={styles.informationHeadingAns}>{companyData.DividendYield}</Text>
                </View>
                <View style={{marginLeft:55}}>
                  <Text style={styles.informationHeading}>P/E Ratio</Text>
                  <Text style={styles.informationHeadingAns}>{companyData.PERatio}</Text>
                </View>
              </View>
            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

  },
  topheader: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor:'black',

  },
  logo: {
    height: 40,
    width: 40,
  },
  headerText: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 8,
    marginRight: 30,
  },
  secheader: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  aboutContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5

  },
  graph: {
    margin: 20
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
    color: 'black'
  },
  informationHeadingAns: {
    fontWeight: '500',
    fontSize: 13,
    color: 'black'
  }
})


export default Details;