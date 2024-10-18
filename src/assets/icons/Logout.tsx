import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const LogoutIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color="#000000"
    fill="none"
    {...props}>
    <Path
      d="M6 6.5C4.15875 8.14796 3 10.3344 3 12.9999C3 17.9705 7.02944 21.9999 12 21.9999C16.9706 21.9999 21 17.9705 21 12.9999C21 10.3344 19.8412 8.14796 18 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 2V11M12 2C11.2998 2 9.99153 3.9943 9.5 4.5M12 2C12.7002 2 14.0085 3.9943 14.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LogoutIcon;
