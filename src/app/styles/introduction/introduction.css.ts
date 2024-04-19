/* eslint-disable */

import { vars } from '../theme.css';
import { style } from '@vanilla-extract/css';

export const intro_wrapper = style({
  width: '100%',
  height: '50vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: 40,
  paddingRight: 250,
  '@media': {
    'screen and (min-width:1024px) and (max-width:1279px)': {
      // 테블릿 가로 & 노트북
      paddingRight: 50,
    },
    'screen and (min-width:768px) and (max-width:1023px)': {
      padding: '0px 0px',
      paddingRight: 20,
      height: '100%',
    },
    'screen and (max-width:479px)': {
      // 모바일
      padding: 5,
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
  },
});

export const main_title = style({
  color: vars.themeColor.color.mainFontColor,
  fontSize: vars.fontSize.XLarge,
  width: '100%',
  marginBottom: 20,
  '@media': {
    'screen and (min-width:1024px) and (max-width:1279px)': {
      // 테블릿 가로 & 노트북
      fontSize: vars.fontSize.large,
    },
    'screen and (min-width:768px) and (max-width:1023px)': {
      fontSize: vars.fontSize.large,
      marginBottom: 20,
    },
    'screen and (max-width:479px)': {
      // 모바일
      fontSize: vars.fontSize.large,
      marginBottom: 25,
    },
  },
});

export const sub_title = style([
  main_title,
  {
    fontSize: vars.fontSize.regular,
    opacity: '0.9',
    marginBottom: 50,
    '@media': {
      'screen and (min-width:1024px) and (max-width:1279px)': {
        // 테블릿 가로 & 노트북
        fontSize: vars.fontSize.small,
      },
      'screen and (min-width:768px) and (max-width:1023px)': {
        fontSize: vars.fontSize.regular,
        marginBottom: 30,
      },
      'screen and (max-width:479px)': {
        // 모바일
        fontSize: vars.fontSize.micro,
        marginBottom: 20,
      },
    },
  },
]);
export const paragraph_wrapper = style({
  position: 'relative',
  paddingLeft: 20,
  '::before': {
    content: ' ',
    width: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 3,
    background: `linear-gradient(to bottom, ${vars.themeColor.color.gradient_start} 0%, ${vars.themeColor.color.gradient_end} 100%)`,
    transition: 'background 5s ease-out',
  },
  '@media': {
    'screen and (min-width:768px) and (max-width:1023px)': {
      paddingLeft: 10,
    },
    'screen and (max-width:479px)': {
      paddingLeft: 5,
    },
  },
});
export const paragraph = style({
  lineHeight: 1.6,
  color: vars.themeColor.color.mainFontColor,
  padding: '5px 10px',
  fontWeight: vars.fontWeight.medium,
  '@media': {
    'screen and (min-width:1024px) and (max-width:1279px)': {
      // 테블릿 가로 & 노트북
      fontSize: vars.fontSize.small,
    },
    'screen and (min-width:768px) and (max-width:1023px)': {
      fontSize: vars.fontSize.small,
    },
    'screen and (max-width:479px)': {
      fontSize: vars.fontSize.micro,
    },
  },
});
