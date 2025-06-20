import { FC, useMemo, useState } from 'react';
import { Theme, ThemeContext, ThemeContextProps } from '../../../../shared/lib/theme/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from 'src/shared/lib/theme/useTheme';

const defaultTheme: Theme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.Light;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const defaultValue: ThemeContextProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};
