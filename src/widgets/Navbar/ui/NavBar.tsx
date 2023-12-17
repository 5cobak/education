import AppLink from 'src/shared/ui/AppLink';
import s from './Navbar.scss';
import { useTranslation } from 'react-i18next';
interface Props {}

export const NavBar: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('common');
  return (
    <div className={s.navbar}>
      <div className={s.linksWrapper}>
        <AppLink className={s.link} to={'/'}>
          {t('go_main_page')}
        </AppLink>
        <AppLink className={s.link} to={'/about'}>
          {t('go_about_us_page')}
        </AppLink>
      </div>
    </div>
  );
};
