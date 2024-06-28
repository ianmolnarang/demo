import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const baseWidth = 375;
const baseHeight = 812;

const spH = size => (width / baseWidth) * size;
const spV = size => (height / baseHeight) * size;
const spM = (size, factor = 0.5) => size + (spH(size) - size) * factor;

export {spH, spV, spM};
