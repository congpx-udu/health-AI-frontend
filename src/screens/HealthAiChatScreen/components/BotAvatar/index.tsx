import Svg, { Path, Rect } from 'react-native-svg';

import { s } from '@/utils/scale';

type BotAvatarProps = {
  size?: number;
};

/** Avatar bot vuông bo góc — khớp Frame 87 (32×32, #6367FF). */
const BotAvatar = ({ size = s(32) }: BotAvatarProps) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <Rect width="32" height="32" rx="4" fill="#6367FF" />
    <Path
      d="M10 12.5C10 11.1193 11.1193 10 12.5 10H19.5C20.8807 10 22 11.1193 22 12.5V14H23C23.5523 14 24 14.4477 24 15V19C24 19.5523 23.5523 20 23 20H22V21.5C22 22.3284 21.3284 23 20.5 23H11.5C10.6716 23 10 22.3284 10 21.5V20H9C8.44772 20 8 19.5523 8 19V15C8 14.4477 8.44772 14 9 14H10V12.5ZM12 14H20V12.5C20 12.2239 19.7761 12 19.5 12H12.5C12.2239 12 12 12.2239 12 12.5V14ZM13 17.5C13 17.7761 13.2239 18 13.5 18C13.7761 18 14 17.7761 14 17.5C14 17.2239 13.7761 17 13.5 17C13.2239 17 13 17.2239 13 17.5ZM18 17.5C18 17.7761 18.2239 18 18.5 18C18.7761 18 19 17.7761 19 17.5C19 17.2239 18.7761 17 18.5 17C18.2239 17 18 17.2239 18 17.5ZM12 21H20V19.5H12V21Z"
      fill="#FCF6F6"
    />
  </Svg>
);

export default BotAvatar;
