// AnimalIcon.tsx
import React from 'react';
import Svg, {Circle, Ellipse} from 'react-native-svg';

const AnimalIcon = () => {
  return (
    <Svg height="100" width="100" viewBox="0 0 100 100">
      <Circle cx="25" cy="25" r="10" fill="orange" /> {/* Cabeza de gato */}
      <Ellipse cx="75" cy="25" rx="10" ry="15" fill="grey" />
      <Circle cx="25" cy="75" r="15" fill="brown" /> {/* Cabeza de perro */}
      <Circle cx="75" cy="75" r="12" fill="black" /> {/* Cabeza de oso */}
    </Svg>
  );
};

export default AnimalIcon;
