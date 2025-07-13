import { Button } from 'src/shared/ui/Button';
import s from './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { Portal } from 'src/shared/ui/Portal';
import { AuthModal } from 'src/features/AuthByPassword';
import { useSelector } from 'react-redux';
import { selectUserName } from 'src/entities/User/model/selectors/selectUserName/selectUserName';

export const NavBar: React.FC = () => {
    const { t } = useTranslation();

    const [isAuthModalOpened, setAuthModalOpen] = useState(false);
    const username = useSelector(selectUserName);

    const openModal = useCallback(() => {
        setAuthModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setAuthModalOpen(false);
    }, []);

    useEffect(() => {
        if (username) {
            closeModal();
        }
    }, [username, closeModal]);

    return (
        <div className={s.navbar}>
            <div className={s.buttonSingInWrapper}>
                {username ? (
                    <div>
                        <span className={s.username}>{username}</span>
                        <Button onClick={() => {}} theme="outlineDark">
                            {t('Button_Exit')}
                        </Button>
                    </div>
                ) : (
                    <Button onClick={openModal} theme="outlineDark">
                        {t('Button_Auth')}
                    </Button>
                )}
            </div>

            <Portal component={<AuthModal isOpen={isAuthModalOpened} onClose={closeModal} />} />
        </div>
    );
};
