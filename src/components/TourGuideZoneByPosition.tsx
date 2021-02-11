import * as React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { BorderRadiusObject, Shape } from '../types'
import { TourGuideZone } from './TourGuideZone'

interface TourGuideZoneByPositionProps {
  zone: number
  isTourGuide?: boolean
  content: React.ReactNode
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  width?: number | string
  height?: number | string
  shape?: Shape
  borderRadiusObject?: BorderRadiusObject
  containerStyle?: StyleProp<ViewStyle>
  keepTooltipPosition?: boolean
  tooltipBottomOffset?: number
  text?: string
}

export const TourGuideZoneByPosition = ({
  isTourGuide,
  zone,
  width,
  content,
  height,
  top,
  left,
  right,
  bottom,
  shape,
  containerStyle,
  keepTooltipPosition,
  tooltipBottomOffset,
  borderRadiusObject,
  text,
}: TourGuideZoneByPositionProps) => {
  if (!isTourGuide) {
    return null
  }

  return (
    <View
      pointerEvents='none'
      style={[StyleSheet.absoluteFillObject, containerStyle]}
    >
      <TourGuideZone
        isTourGuide
        {...{
          zone,
          shape,
          keepTooltipPosition,
          tooltipBottomOffset,
          borderRadiusObject,
          text,
          content,
        }}
        style={{
          position: 'absolute',
          height,
          width,
          top,
          right,
          bottom,
          left,
        }}
      />
    </View>
  )
}
