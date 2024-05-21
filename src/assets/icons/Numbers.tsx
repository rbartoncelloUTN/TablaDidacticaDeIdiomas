// NumberIcon.tsx
import React from 'react';
import Svg, {Text} from 'react-native-svg';

const NumberIcon = () => {
  return (
    <Svg height="100" width="100" viewBox="0 0 100 100">
      <Text x="25" y="30" fontSize="20" fill="black">
        1
      </Text>
      <Text x="75" y="30" fontSize="20" fill="black">
        2
      </Text>
      <Text x="25" y="80" fontSize="20" fill="black">
        3
      </Text>
      <Text x="75" y="80" fontSize="20" fill="black">
        4
      </Text>
    </Svg>
  );
};

export default NumberIcon;
