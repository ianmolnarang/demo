import { top_gainers } from "../constants/graphdata";

export const getGraphData = (data) => {
    return top_gainers.map(item => {
      return {
        value: item.price,
        dataPointText: item.price
      };
    });
  };