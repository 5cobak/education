import AppLink from 'src/shared/ui/AppLink';
import s from './Navbar.scss';
interface Props {}

export const NavBar: React.FC<Props> = (props: Props) => {
  return (
    <div className={s.navbar}>
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
