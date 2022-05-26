import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    primary: '#E9967A',
    secondary: '#F57386',
    subPrimary: '#FFE6DE',
  },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  mobile: customMediaQuery(767),
};
