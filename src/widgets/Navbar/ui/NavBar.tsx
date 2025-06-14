import AppLink from 'src/shared/ui/AppLink';
import s from './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { NavbarIds } from 'config/jest/utils/testIds';

export const NavBar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={s.navbar} data-testid={NavbarIds.Navbar}>
      <div className={s.linksWrapper}>
        <AppLink className={s.link} to={'/'} data-testid={NavbarIds.MainPageLink}>
          {t('go_main_page')}
        </AppLink>
        <AppLink className={s.link} to={'/about'} data-testid={NavbarIds.AboutPageLink}>
          {t('go_about_us_page')}
        </AppLink>
      </div>
    </div>
  );
};
