import * as React from 'react'
import { Box, BoxProps } from '../atoms/Box'
import styled, { StyledComponentProps, css } from 'styled-components'
import { devices } from '../../theme/breakpoints'
import { themeGet } from 'styled-system'

const containerStyle = css`
  display: block;
  position: relative;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
`

export const Container = styled(Box)`
  ${containerStyle}
`

Container.defaultProps = {
  px: 4,
}
Container.displayName = 'Container'

export const MobileFluidContainer = styled(Box)`
  width: 100%;
  @media ${devices.tablet} {
    ${containerStyle}
    padding-left: ${themeGet('space.4')}px;
    padding-right: ${themeGet('space.4')}px;
  }
`
