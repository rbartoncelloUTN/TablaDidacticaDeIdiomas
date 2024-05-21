import {ImageSourcePropType} from 'react-native';

export interface SpeedDialProps {
  data: {
    key: string;
    image: ImageSourcePropType;
  }[];
  numberSelected: number;
  left?: boolean;
  onPress: (value: string) => void;
}
