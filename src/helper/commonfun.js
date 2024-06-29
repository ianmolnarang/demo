import {top_gainers} from '../constants/graphdata';

export const getGraphData = data => {


  return top_gainers.map((item, index) => {

    return {
      value: parseFloat(item.price) * 100,
    };
  });
};
