import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from 'src/styles/colors'

interface Props {
  size?: number
  testID?: string
  // Setting this to SvgProps['color'] for now as the Colors enum is not a part of the branding folder yet.
  color?: SvgProps['color']
}

export default function LogoHeart({ size = 32, testID, color = Colors.black }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" testID={testID}>
      <Path
        fill={color}
        d="M11.595 5.01C10.439 3.856 9.648 1.838 9.256 0c-.393 1.837-1.183 3.856-2.339 5.012-1.155 1.155-3.175 1.946-5.01 2.339 1.836.392 3.855 1.183 5.01 2.339 1.156 1.155 1.947 3.174 2.34 5.01.392-1.836 1.183-3.855 2.338-5.011 1.156-1.155 3.175-1.946 5.011-2.34-1.837-.392-3.855-1.183-5.011-2.338ZM19.1 14.266c-.69-.69-1.163-1.897-1.397-2.994-.235 1.097-.707 2.304-1.397 2.994-.69.69-1.897 1.163-2.994 1.398 1.098.235 2.303.707 2.994 1.397.69.69 1.163 1.897 1.398 2.994.234-1.098.707-2.304 1.397-2.994.69-.69 1.896-1.163 2.993-1.398-1.097-.235-2.303-.707-2.994-1.397ZM6.86 16.627c-.197.92-.593 1.934-1.172 2.513-.58.58-1.593.976-2.513 1.174.92.197 1.933.593 2.513 1.173.58.58.976 1.592 1.173 2.513.197-.921.593-1.934 1.173-2.514.58-.58 1.592-.976 2.513-1.173-.92-.197-1.934-.593-2.513-1.173-.58-.579-.977-1.592-1.174-2.513Z"
      />
    </Svg>
  )
}
