import { Button, ButtonTheme } from 'src/shared/ui/Button';
import s from './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Portal } from 'src/shared/ui/Portal';
import { AuthModal } from 'src/features/AuthByPassword';

export const NavBar: React.FC = () => {
  const { t } = useTranslation();

  const [isAuthModalOpened, setAuthModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setAuthModalOpen(!isAuthModalOpened);
  }, [isAuthModalOpened]);

  const closeModal = useCallback(() => {
    setAuthModalOpen(false);
  }, []);

  return (
    <div className={s.navbar}>
      <div className={s.buttonSingInWrapper}>
        <Button onClick={openModal} theme={ButtonTheme.OutlineDark}>
          {t('Button_Auth')}
        </Button>
      </div>

      <Portal component={<AuthModal isOpen={isAuthModalOpened} onClose={closeModal} />} />
    </div>
  );
};
