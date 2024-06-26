/* eslint-disable */

import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const wrapper = style({
  width: '100%',
  height: '100%',
  padding: 40,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '@media': {
    'screen and (min-width:1024px) and (max-width:1279px)': {
      padding: 20,
    },
    'screen and (min-width:768px) and (max-width:1023px)': {
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 0,
    },
    'screen and (min-width:480px) and (max-width:767px)': {},
    'screen and (max-width:479px)': {
      padding: 20,
    },
  },
});

export const list_item = style({
  color: vars.themeColor.color.mainFontColor,
  fontSize: vars.fontSize.regular,
  transition: 'all .25s ease-in-out',
  position: 'relative',
  ':hover': {
    cursor: 'pointer',
    filter: 'brightness(1.3)',
  },
  '@media': {
    'screen and (min-width:1024px) and (max-width:1279px)': {
      fontSize: vars.fontSize.middleSmall,
    },
    'screen and (min-width:768px) and (max-width:1023px)': {
      fontSize: vars.fontSize.small,
    },
    'screen and (min-width:480px) and (max-width:767px)': {},
    'screen and (max-width:479px)': {
      fontSize: vars.fontSize.small,
    },
  },
});

export const link = style({
  marginBottom: 25,
  textDecoration: 'none',
  boxSizing: 'border-box',
});
export const list_text = style({
  paddingBottom: 5,
  borderBottom: '1px solid transparent',
  borderImage: `linear-gradient(90deg, ${vars.themeColor.color.gradient_start} 0%, ${vars.themeColor.color.gradient_end} 100%)`,
  borderImageSlice: 1,
  transition: 'all .2s ease-in-out',
  ':hover': {
    letterSpacing: 1.2,
    borderImage: `linear-gradient(90deg, ${vars.themeColor.color.gradient_end} 0%, ${vars.themeColor.color.gradient_start} 100%)`,
    borderImageSlice: 1,
  },
});
