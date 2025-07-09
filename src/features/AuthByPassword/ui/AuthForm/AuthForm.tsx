import React, { memo, useCallback } from 'react';
import s from './index.scss';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'src/entities/User';
import { TextField } from 'src/shared/ui/TextField';
import { Button, ButtonTheme } from 'src/shared/ui/Button';
import { Text } from 'src/shared/ui/Text';
import loginReducer, { loginActions } from '../../modal/slice/loginSlice';
import { useLayReducer } from 'src/shared/hooks/useLazyReducer';
import { selectLoginUsername } from '../../modal/selectors/selectUsername/selectLoginUsername';
import { selectLoginUserPassword } from '../../modal/selectors/selectUserPassword/selectLoginUserPassword';
import { selectAuthError } from '../../modal/selectors/selectAuthError/selectAuthError';
import { selectAuthPending } from '../../modal/selectors/selectAuthPending/selectAuthPending';

const AuthForm = memo(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(selectLoginUsername);
    const password = useSelector(selectLoginUserPassword);
    const error = useSelector(selectAuthError);
    const isPending = useSelector(selectAuthPending);

    useLayReducer('login', loginReducer);

    const changeUsernameHandler = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const changeUserPasswordHandler = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    return (
        <form className={s.authForm}>
            <h1>{t('authModal_singIn')}</h1>
            {error && <Text>{t(error.key, error.params)}</Text>}
            <TextField
                autoFocus
                value={username}
                wrapperClassName={s.inputWrapper}
                name="user"
                changeHandler={changeUsernameHandler}
            />
            <TextField
                value={password}
                wrapperClassName={s.inputWrapper}
                type="password"
                name="password"
                changeHandler={changeUserPasswordHandler}
            />
            <Button
                theme={ButtonTheme.OutlineDark}
                disabled={!(username && password) || isPending}
                pending={isPending}
                onClick={() => {
                    dispatch(loginUser({ username, password }));
                }}
            >
                {t('Button_Auth')}
            </Button>
        </form>
    );
});

AuthForm.displayName = 'AuthForm';

export default AuthForm;
