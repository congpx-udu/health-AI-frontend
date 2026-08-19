import Svg, { Circle, Defs, FeBlend, FeColorMatrix, FeComposite, FeFlood, FeGaussianBlur, FeOffset, Filter, G, Path } from 'react-native-svg';

type ScanPortIconProps = {
  size?: number;
};

/** Nút quét góc phải header — từ scan-port.svg. */
const ScanPortIcon = ({ size = 47 }: ScanPortIconProps) => (
  <Svg width={size} height={(size * 51) / 47} viewBox="0 0 47 51" fill="none">
    <Defs>
      <Filter id="scanShadow" x="0" y="3.5" width="47" height="47" filterUnits="userSpaceOnUse">
        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
        <FeColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <FeOffset dy="4" />
        <FeGaussianBlur stdDeviation="2" />
        <FeComposite in2="hardAlpha" operator="out" />
        <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </Filter>
      <Filter id="scanGlow" x="0.5" y="0" width="46" height="46" filterUnits="userSpaceOnUse">
        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
        <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <FeGaussianBlur stdDeviation="1.75" result="effect1_foregroundBlur" />
      </Filter>
    </Defs>
    <G filter="url(#scanShadow)">
      <G filter="url(#scanGlow)">
        <Circle cx="23.5" cy="23" r="19.5" fill="#6367FF" />
      </G>
      <Circle cx="23.5" cy="23.0001" r="16.38" fill="#6367FF" />
      <Path
        d="M25.84 15.98H30.52V19.88H28.96V17.54H25.84V15.98ZM21.16 15.98V17.54H18.04V19.88H16.48V15.98H21.16ZM25.84 30.02V28.46H28.96V26.12H30.52V30.02H25.84ZM21.16 30.02H16.48V26.12H18.04V28.46H21.16V30.02ZM16.48 22.22H30.52V23.78H16.48V22.22Z"
        fill="#FCF6F6"
      />
    </G>
  </Svg>
);

export default ScanPortIcon;
