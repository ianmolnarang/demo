import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  LineChart,
  LineChartBicolor,
  CurveType,
} from 'react-native-gifted-charts';
import { getGraphData } from '../helper/commonfun';
import { spH, spV } from '../styles/responsiveScreen';
import { LinearGradient, Stop } from 'react-native-svg';

const Graph = () => {
  const lineData = [
    { value: 17, dataPointText: '0' },
    { value: 13, dataPointText: '20' },
    { value: 18, dataPointText: '18' },
    { value: 90, dataPointText: '40' },
    { value: 36, dataPointText: '36' },
    { value: 60, dataPointText: '60' },
    { value: 54, dataPointText: '54' },
    { value: 85, dataPointText: '85' },
  ];
  const ref = useRef(null);
  const [x, setX] = useState(10);

  const done = useRef(0);
  useEffect(() => {
    ref?.current?.scrollTo({ x });
    if (done.current < 2) {
      if (x < 560) {
        setTimeout(() => setX(x + 5), done.current ? 16 : 20);
      } else {
        setTimeout(() => setX(-200), 1800);
        done.current++;
      }
    }
  }, [x]);

  return (
    <View style={{ backgroundColor: '#ffffff' }}>
      <LineChart
        spacing={15}
        curved
        noOfSections={5}
        curvature={0.05}
        thickness={2}
        isAnimated
        hideRules
        hideDataPoints
        animationDuration={5000}
        scrollRef={ref}
        height={spV(200)}
        data={getGraphData()}
        xAxisColor={'gray'}
        yAxisColor={'gray'}
        yAxisTextStyle={{ color: 'lightgray' }}
      />
    </View>
  );
};

export default Graph;
