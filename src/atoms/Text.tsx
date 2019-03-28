import * as React from 'react'
import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color,
  background,
  SpaceProps,
  WidthProps,
  ColorProps,
  BackgroundProps,
  FontSizeProps,
  TextAlignProps,
  TextStyleProps,
  textAlign,
  textColor,
  textStyle,
  fontStyle,
  fontFamily,
  TextColorProps,
  FontStyleProps,
  FontFamilyProps,
  MaxWidthProps,
  maxWidth,
  lineHeight,
  LineHeightProps,
  fontWeight,
  FontWeightProps,
  letterSpacing,
  LetterSpacingProps,
  variant,
  VariantArgs,
  display,
  DisplayProps,
} from 'styled-system'

type TextProps = TextAlignProps &
  TextColorProps &
  TextStyleProps &
  FontSizeProps &
  FontStyleProps &
  FontFamilyProps &
  SpaceProps &
  WidthProps &
  MaxWidthProps &
  ColorProps &
  BackgroundProps &
  LineHeightProps &
  FontWeightProps &
  LetterSpacingProps &
  DisplayProps

export const Text = styled.div<TextProps>`
  ${textAlign}
  ${textColor}
  ${textStyle}
  ${fontSize}
  ${fontStyle}
  ${fontFamily}
  ${space}
  ${width}
  ${maxWidth}
  ${color}
  ${background}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  ${display}
  font-variant: normal;
  font-feature-settings: normal;
`

Text.displayName = 'Text'
Text.defaultProps = {
  fontSize: 2,
  fontWeight: 3,
  lineHeight: 'copy',
}

export const H1 = styled(Text)<TextProps>``
H1.defaultProps = {
  fontSize: [6, 8],
  fontWeight: 5,
  color: 'text',
  lineHeight: 'title',
  letterSpacing: 'tight',
  pb: 4,
}

export const H2 = styled(Text)<TextProps>``
H2.defaultProps = {
  fontSize: [4, 6],
  fontWeight: 5,
  color: 'text',
  lineHeight: 'title',
  pb: [2, 4],
}

export const HeaderCaps = styled(Text)<TextProps>`
  text-transform: uppercase;
`
HeaderCaps.defaultProps = {
  color: 'text',
  fontSize: [2, 3],
  fontWeight: 5,
  pb: 2,
  letterSpacing: 'tracked',
}
