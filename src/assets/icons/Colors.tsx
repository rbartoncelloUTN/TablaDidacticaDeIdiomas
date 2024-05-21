import React from 'react';
import Svg, {Circle, SvgProps} from 'react-native-svg';

const ColorIcon = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <Circle cx="25" cy="25" r="20" fill="red" />
      <Circle cx="75" cy="25" r="20" fill="green" />
      <Circle cx="25" cy="75" r="20" fill="blue" />
      <Circle cx="75" cy="75" r="20" fill="yellow" />
    </Svg>
  );
};

export default ColorIcon;
