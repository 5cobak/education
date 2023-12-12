import AppLink, { AppLinkTheme } from 'src/shared/ui/AppLink';
import s from './index.scss';
import ThemeSwitcher from 'src/features/ThemeSwitcher';
interface Props {}

const NavBar: React.FC<Props> = (props: Props) => {
  return (
    <div className={s.navbar}>
      <ThemeSwitcher />
      <div className={s.linksWrapper}>
        <AppLink className={s.link} to={'/'}>
          Main
        </AppLink>
        <AppLink className={s.link} to={'/about'}>
          About
        </AppLink>
      </div>
    </div>
  );
};

export default NavBar;
