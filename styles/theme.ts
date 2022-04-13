import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    gray: '#c4c4c4',
  },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(767),
};
