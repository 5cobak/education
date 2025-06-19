import { Button, ButtonTheme } from 'src/shared/ui/Button';
import s from './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Portal } from 'src/shared/ui/Portal';
import { Modal } from 'src/shared/ui/Modal';

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

      <Portal
        component={
          <Modal onClose={closeModal} isOpen={isAuthModalOpened}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur labore nobis explicabo eius,
            nisi ab animi deserunt tempora voluptatem quidem est a alias nemo! Quam ad necessitatibus quasi id!
          </Modal>
        }
      />
    </div>
  );
};
