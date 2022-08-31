import { Theme } from '@mui/material/styles';
import { ITheme } from './theme';

/** Typing for styled-components default theme */

declare module '@mui/material/styles' {
  interface Theme extends ITheme {}

  // allow configuration using `createTheme`
  interface ThemeOptions extends ITheme {}
}
