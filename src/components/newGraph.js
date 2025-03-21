import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const StockChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockChartData = async () => {
      try {
        const apiKey = 'JUQWYWH93GL7GES4';
        const symbol = 'AAPL';
        const interval = '5min';

        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);
        const data = response.data;
        console.log('response', response.data);

        const timeSeriesData = data['Time Series (5min)'];

        // Format data for react-native-gifted-charts
        const formattedData = Object.keys(timeSeriesData).map(date => ({
          label: new Date(date),
          value: parseFloat(timeSeriesData[date]['4. close']),
        }));

        setChartData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stock chart data:', error);
        setLoading(false);
      }
    };

    fetchStockChartData();
  }, []);

  if (loading || !chartData) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <LineChart
        data={chartData}
        width={'100%'}
        height={300}
        animation={{ duration: 2000 }}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default StockChartComponent;
