import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { LineChart } from "react-native-gifted-charts"
import { getGraphData } from '../helper/commonfun';

const Graph = () => {
    const lineData = [
        {value: 0.17, dataPointText: '0'},
        {value: 0.0137, dataPointText: '20'},
        {value: 18, dataPointText: '18'},
        {value: 90, dataPointText: '40'},
        {value: 36, dataPointText: '36'},
        {value: 60, dataPointText: '60'},
        {value: 54, dataPointText: '54'},
        {value: 85, dataPointText: '85'}
    ];
    return (
        <View style={{backgroundColor: '#1A3461'}}>
            <LineChart
                initialSpacing={0}
                data={getGraphData()}
                spacing={30}
                textColor1="yellow"
                textShiftY={-8}
                textShiftX={-10}
                textFontSize={13}
                thickness={5}
                hideRules
                hideYAxisText
                yAxisColor="#0BA5A4"
                showVerticalLines
                verticalLinesColor="rgba(14,164,164,0.5)"
                xAxisColor="#0BA5A4"
                color="#0BA5A4"
                isAnimated={true}

            />
        </View>
    );
  };

export default Graph;