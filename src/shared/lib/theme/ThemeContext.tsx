import { createContext } from 'react';

export enum Theme {
  Light = 'light_global_theme',
  Dark = 'dark_global_theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
