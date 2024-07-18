type MyTheme = {
  palette: {
    primary: 'red' | 'green' | 'blue';
    [key: string]: string;
  },
  [key: string]: unknown;
};

const theme = {
  palette: {
    primary: 'red',
  },
  spacing: {
    small: 8,
  },
} satisfies MyTheme;