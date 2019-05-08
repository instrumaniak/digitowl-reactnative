/**
 *   Configuration settings / common shared data
 */

import Color from 'color'

export const colors = {
  blue: '#4682B4',

  //green: '#00b175', spendee
  //greenDark: '#00a16b',

  green: '#119DA4',

  red: '#CC2936',
  orange: '#F15025',
  yellow0: '#F4D35E',
  yellow: '#FDB833',

  white: '#FFFFFF',
  white2: '#FDFDFF',
  whiteSmoke: '#F5F3F5',

  //grey: '#BBC8CA', // silver sand
  grey: '#c3c6c7', // light text
  grey1: '#5B6267', // black coral // std. text color
  grey2: '#4B5358', // davy's grey // header text
  grey3: '#393D3F', // black olide

  charcoal: '#383F51',
  black: '#101419'

}

const brand = Color(colors.blue).desaturate(0.4).darken(0.15).hex(),
      brandDarken = Color(brand).darken(0.05).hex(),
      brandLighten = Color(brand).lighten(0.05).hex()

export const themeColors = {
  brand,
  brandDarken,
  brandLighten
}

