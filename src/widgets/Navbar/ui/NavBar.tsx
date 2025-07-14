import { Button } from 'src/shared/ui/Button';
import s from './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { Portal } from 'src/shared/ui/Portal';
import { AuthModal } from 'src/features/AuthByPassword';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'src/entities/User/model/selectors/selectUserName/selectUserName';
import { LOCAL_STORAGE_USER_AUTH_DATA } from 'src/shared/api';
import { userActions } from 'src/entities/User';

export const NavBar: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModalOpened, setAuthModalOpen] = useState(false);
    const username = useSelector(selectUserName);

    const openModal = useCallback(() => {
        setAuthModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setAuthModalOpen(false);
    }, []);

    const onLogout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_USER_AUTH_DATA);
        dispatch(userActions.clearAuthData());
    }, [dispatch]);

    useEffect(() => {
        if (username) {
            closeModal();
        }
    }, [username, closeModal]);

    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_AUTH_DATA) || '');
        if (authData) {
            dispatch(userActions.setAuthData(authData));
        }
    }, [dispatch]);

    return (
        <div className={s.navbar}>
            <div className={s.buttonSingInWrapper}>
                {username ? (
                    <div>
                        <span className={s.username}>{username}</span>
                        <Button onClick={onLogout} theme="outlineDark">
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
