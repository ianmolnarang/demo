import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  LineChart,
  LineChartBicolor,
  CurveType,
} from 'react-native-gifted-charts';
import {getGraphData} from '../helper/commonfun';
import {spH, spV} from '../styles/responsiveScreen';
import {LinearGradient, Stop} from 'react-native-svg';

const Graph = () => {
  const lineData = [
    {value: 17, dataPointText: '0'},
    {value: 13, dataPointText: '20'},
    {value: 18, dataPointText: '18'},
    {value: 90, dataPointText: '40'},
    {value: 36, dataPointText: '36'},
    {value: 60, dataPointText: '60'},
    {value: 54, dataPointText: '54'},
    {value: 85, dataPointText: '85'},
  ];
  const ref = useRef(null);
  const [x, setX] = useState(10);

  const done = useRef(0);
  useEffect(() => {
    ref?.current?.scrollTo({x});
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
    <View style={{backgroundColor: '#ffffff'}}>
      {/* <LineChart
        // initialSpacing={10}
        data={getGraphData()}
        textColor1="yellow"
        textShiftY={-8}
        textShiftX={-10}
        textFontSize={13}
        thickness={5}
        curved={true}
        noOfSections={5}
        hideRules
        hideDataPoints
        // width={spH()}
        yAxisColor="#0BA5A4"
        xAxisColor="#0BA5A4"
        color="#0BA5A4"
        xAxisLength={spH(295)}
        isAnimated={true}
        height={spV(250)}
      /> */}
      {/* <LineChartBicolor
        data={getGraphData()}
        // areaChart
        curved={true}
        color="green"
        
        colorNegative="red"
        startFillColor="green"
        startFillColorNegative="red"
      /> */}

      <LineChart
        spacing={15}
        curved
        noOfSections={5}
        curvature={0.05}
        thickness={2}
        // lineGradient
        // lineGradientId="ggrd" // same as the id passed in <LinearGradient> below
        // lineGradientComponent={() => {
        //   return (
        //     <LinearGradient id="ggrd" x1="0" y1="0" x2="0" y2="1">
        //       <Stop offset="0" stopColor={'#A4F700'} />
        //       <Stop offset="0.5" stopColor={'#7CF2F7'} />
        //       <Stop offset="1" stopColor={'#F6A003'} />
        //     </LinearGradient>
        //   );
        // }}
        isAnimated
        hideRules
        hideDataPoints
        animationDuration={5000}
        scrollRef={ref}
        height={spV(200)}
        data={getGraphData()}
        // color2="yellow"
        // data2={[...data].map(item => ({value: item.value * 0.6}))}
        // thickness2={2}
        xAxisColor={'gray'}
        yAxisColor={'gray'}
        yAxisTextStyle={{color: 'lightgray'}}

        // showVerticalLines
        // verticalLinesUptoDataPoint
        // verticalLinesColor={'#243'}
      />
    </View>
  );
};

export default Graph;
