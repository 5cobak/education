import { ButtonHTMLAttributes } from 'react';
import s from './index.scss';
import Button, { ButtonTheme } from 'src/shared/ui/Button';
import { useTheme } from 'src/shared/lib/theme/useTheme';
import SwitcherDark from './assets/icons/switcherDark.svg';
import SwitcherLight from './assets/icons/switcherLight.svg';
import Icon from 'src/shared/ui/Icon';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ThemeSwitcher: React.FC<Props> = (props: Props) => {
  const { toggleTheme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
      <Icon dark={<SwitcherDark />} light={<SwitcherLight />} />
    </Button>
  );
};

export default ThemeSwitcher;
