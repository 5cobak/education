import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme, ThemeContext, ThemeContextProps } from '../../../../shared/lib/theme/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from 'src/shared/lib/theme/useTheme';

const defaultTheme: Theme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.Light;

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const appElement = document.querySelector('.app');

    appElement.classList.add(theme);
    document.body.className = theme;
  }, [theme]);

  const defaultValue: ThemeContextProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};
