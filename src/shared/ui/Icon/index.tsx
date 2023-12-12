import { ReactElement } from 'react';
import { Theme } from 'src/shared/lib/theme/ThemeContext';
import { useTheme } from 'src/shared/lib/theme';

interface Props {
  dark: ReactElement;
  light: ReactElement;
}

const Icon: React.FC<Props> = (props: Props) => {
  const { dark, light } = props;
  const { theme } = useTheme();

  return <div>{theme === Theme.Light ? dark : light}</div>;
};

export default Icon;
