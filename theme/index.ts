import {
  yellow,
  white,
  lightblue,
  red,
  grey,
  indigo,
  limeGreenVivid,
} from './colors'
import { breakpoints } from './breakpoints'

const neutralcolor = grey

export default {
  breakpoints,
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512],
  fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
    wide: 1.75,
    spaced: 2,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.04em',
    mega: '0.25em',
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  zIndex: [1, 5, 10, 50, 100],
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 320, 448, 512, 576, 768, 1024, 1536],
  shadows: [
    '0 1px 3px hsla(0,0%,0%,0.2)',
    '0 4px 6px hsla(0,0%,0%,0.2)',
    '0 5px 15px hsla(0,0%,0%,0.2)',
    '0 10px 24px hsla(0,0%,0%,0.2)',
    '0 15px 35px hsla(0,0%,0%,0.2)',
  ],
  colors: {
    // layouts
    topbarBg: neutralcolor[2],
    navbar: white,
    brand: yellow[5],
    bg: neutralcolor[9],
    bgAlt: white,
    bgPrimary: yellow[5],
    wizardBorder: neutralcolor[8],
    heroText: neutralcolor[2],
    border: 'rgb(244, 247, 250)',
    heroSubText: neutralcolor[4],
    cardHeader: neutralcolor[9],
    // cardHeaderBg: neutralcolor[3],
    cardHeaderBg: yellow[5],
    cardHeaderAltBg: yellow[5],
    cardHeaderAlt: white,
    cardBorder: neutralcolor[8],
    cardBody: white,
    tableHeaderBg: neutralcolor[9],
    // tableHeader: neutralcolor[2],
    tableHeader: neutralcolor[2],
    // base
    black: '#000',
    white: white,
    transparent: 'transparent',
    neutral: [...neutralcolor],
    yellow: [...yellow],
    blue: [...lightblue],
    red: [...red],
    indigo: [...indigo],
    green: [...limeGreenVivid],

    // theming
    text: neutralcolor[9],
    link: yellow[5],
    subtle: indigo[7],
    footerBg: neutralcolor[0],
    navTrigger: neutralcolor[9],
    mobileNavBg: indigo[0],
  },
}
