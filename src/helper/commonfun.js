import {top_gainers} from '../constants/graphdata';

export const getGraphData = data => {
  // const baseTime = new Date();
  // baseTime.setHours(0);
  // baseTime.setMinutes(0);

  return top_gainers.map((item, index) => {
    // const time = new Date(baseTime.getTime());
    // time.setMinutes(time.getMinutes() + index * 15);
    return {
      value: parseFloat(item.price) * 100,
      // label: `${('0' + time.getHours()).slice(-2)}:${(
      //   '0' + time.getMinutes()
      // ).slice(-2)}`,
      // dataPointText: item.price,
    };
  });
};
