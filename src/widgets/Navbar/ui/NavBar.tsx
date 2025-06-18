import s from './Navbar.scss';
import { useTranslation } from 'react-i18next';

export const NavBar: React.FC = () => {
  const { t } = useTranslation();
  return <div className={s.navbar}></div>;
};
