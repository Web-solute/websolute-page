import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    primary: '#E9967A',
    secondary: '#F57386',
    subPrimary: 'rgba(233, 150, 122, 0.3)',
  },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(767),
};
