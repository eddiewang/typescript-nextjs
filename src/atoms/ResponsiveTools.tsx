import * as React from 'react'
import { Box } from './Box'

export const HideWhenSmall = props => (
  <Box display={['none', 'initial']} {...props} />
)

export const OnlyMobile = props => (
  <Box display={['initial', 'none']} {...props} />
)

export const TabletAndLower = props => (
  <Box display={['initial', 'initial', 'none']} {...props} />
)

export const OnlyDesktop = props => (
  <Box display={['none', 'none', 'initial']} {...props} />
)
