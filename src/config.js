/**
 *   Configuration settings / common shared data
 */

import Color from 'color'

const light_scheme_colors = {
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

const dark_scheme_colors = {
  blue: '#4682B4',

  //green: '#00b175', spendee
  //greenDark: '#00a16b',

  green: '#119DA4',

  red: '#CC2936',
  orange: '#F15025',
  yellow0: '#F4D35E',
  yellow: '#FDB833',

  white: Color('#FFFFFF').darken(0.01).hex(),
  white2: Color('#FDFDFF').darken(0.05).hex(),
  whiteSmoke: '#F5F3F5',

  //grey: '#BBC8CA', // silver sand
  grey: '#999', // light text
  grey1: '#ddd', // black coral // std. text color
  grey2: '#eee', // davy's grey // header text
  grey3: '#393D3F', // black olide

  charcoal: '#383F51',
  black: '#101419',
}

export const colors = dark_scheme_colors

//'#171f46'
// const brand = Color('#171f46').desaturate(0.25).darken(0.05).hex(),
//       brandDarken =  Color(brand).darken(0.05).hex(),
//       brandLighten = Color(brand).lighten(0.25).hex()

const brand = Color(colors.charcoal).desaturate(0.25).darken(0.15).hex(),
      brandDarken =  Color(brand).darken(0.15).hex(),
      brandLighten = Color(brand).lighten(0.25).hex()

export const themeColors = {
  brand,
  brandDarken,
  brandLighten,

  background: brand,
  backgroundLighten: Color(brand).desaturate(0.25).lighten(0.15).hex(),
  backgroundDarken: brandDarken
}

