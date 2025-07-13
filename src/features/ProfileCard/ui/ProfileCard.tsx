import React, { memo, useCallback, useMemo } from 'react';
import s from './index.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/Button';
import { TextField } from 'src/shared/ui/TextField';

import { Text } from 'src/shared/ui/Text';
import { Loader } from 'src/shared/ui/Loader';
import { useValidationNumber } from 'src/shared/hooks/useValidationNumber';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfileCardLastName } from '../model/selectors/selectProfileCardLastName/selectProfileCardLastName';
import { selectProfileCardAge } from '../model/selectors/selectProfileCardAge/selectProfileCardAge';
import { selectProfileFirstName } from '../model/selectors/selectProfileFirstName/selectProfileFirstName';
import { selectProfileCardCity } from '../model/selectors/selectProfileCardCity/selectProfileCardCity';
import { selectProfileCardCountry } from '../model/selectors/selectProfileCardCountry/selectProfileCardCountry';
import { selectProfileCardCurrency } from '../model/selectors/selectProfileCardCurrency/selectProfileCardCurrency';
import { selectProfileCardAvatar } from '../model/selectors/selectProfileCardAvatar/selectProfileCardAvatar';
import { selectUserName } from 'src/entities/User/model/selectors/selectUserName/selectUserName';
import { profileCardActions } from '../model/slice/profileCardSlice';
import { Avatar } from 'src/shared/ui/Avatar';
import { editProfile } from '../model/services/editProfile.asynk';
import { selectProfileCardIsLoading } from '../model/selectors/selectProfileCardIsLoading/selectProfileCardIsLoading';
import { selectProfileCardError } from '../model/selectors/selectProfileCardError/selectProfileCardError';
import { selectProfileCardIsEditable } from '../model/selectors/selectProfileCardIsEditable/selectProfileCardIsEditable';
import { selectProfileError } from 'src/entities/Profile';
import classNames from 'classnames';

export const ProfileCard = memo(() => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const firstName = useSelector(selectProfileFirstName);
    const lastName = useSelector(selectProfileCardLastName);
    const profileAge = useSelector(selectProfileCardAge);
    const city = useSelector(selectProfileCardCity);
    const country = useSelector(selectProfileCardCountry);
    const currency = useSelector(selectProfileCardCurrency);
    const avatar = useSelector(selectProfileCardAvatar);
    const username = useSelector(selectUserName);

    const isEditable = useSelector(selectProfileCardIsEditable);

    const fetchProfileError = useSelector(selectProfileError);
    const editProfileError = useSelector(selectProfileCardError);
    const fetchIsPending = useSelector(selectProfileCardIsLoading);
    const editPending = useSelector(selectProfileCardIsLoading);
    const error = useMemo(() => {
        return fetchProfileError ?? editProfileError;
    }, [fetchProfileError, editProfileError]);

    const isLoading = useMemo(() => {
        return fetchIsPending || editPending;
    }, [editPending, fetchIsPending]);

    const { number: age, error: errorNumber } = useValidationNumber(profileAge);

    const onFirstNameChange = useCallback(
        (value: string) => {
            dispatch(profileCardActions.setProfileFirstName(value));
        },
        [dispatch]
    );

    const onLastNameChange = useCallback(
        (value: string) => {
            dispatch(profileCardActions.setProfileLastName(value));
        },
        [dispatch]
    );

    const onUserNameChange = useCallback(
        (value: string) => {
            dispatch(profileCardActions.setProfileUsername(value));
        },
        [dispatch]
    );

    const onCountryChange = useCallback(
        (value: string) => {
            dispatch(profileCardActions.setProfileCountry(value));
        },
        [dispatch]
    );

    const onCityChange = useCallback(
        (value: string) => {
            dispatch(profileCardActions.setProfileCity(value));
        },
        [dispatch]
    );

    const onAgeChange = useCallback(
        (value: string) => {
            dispatch(profileCardActions.setProfileAge(value));
        },
        [dispatch]
    );

    const onCurrencyChange = useCallback(
        (value: string) => {
            dispatch(profileCardActions.setProfileCurrency(value));
        },
        [dispatch]
    );

    const onAvatarChange = useCallback(
        (value: string) => {
            dispatch(profileCardActions.setProfileAvatar(value));
        },
        [dispatch]
    );

    const editProfileHandler = useCallback(() => {
        dispatch(profileCardActions.editProfile());
    }, [dispatch]);

    const applyEditableProfileHandler = useCallback(() => {
        dispatch(editProfile());
    }, [dispatch]);

    const cancelEditableProfileHandler = useCallback(() => {
        dispatch(profileCardActions.cancelEditableProfile());
    }, [dispatch]);

    const cardMods = {
        [s['isEditable']]: isEditable,
    };

    return (
        <div className={classNames(s.card, cardMods)}>
            <div className={s.head}>
                <Text title={t('ProfilePage_Header')} />
                <div className={s.buttonsWrapper}>
                    {!isEditable ? (
                        <Button onClick={editProfileHandler} size="xl">
                            {t('EditProfile_button')}
                        </Button>
                    ) : (
                        <>
                            <Button onClick={applyEditableProfileHandler} theme="success" size="xl">
                                {t('applyEditProfile_button')}
                            </Button>
                            <Button onClick={cancelEditableProfileHandler} theme="cancel" size="xl">
                                {t('cancelEditProfile_button')}
                            </Button>
                        </>
                    )}
                </div>
            </div>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className={s.cardAvatar}>{avatar && <Avatar src={avatar} />}</div>
                    <TextField
                        disabled={!isEditable}
                        width="xl"
                        label="first name"
                        wrapperClassName={s.input}
                        value={firstName}
                        changeHandler={onFirstNameChange}
                    />
                    <TextField
                        disabled={!isEditable}
                        label="last name"
                        wrapperClassName={s.input}
                        value={lastName}
                        changeHandler={onLastNameChange}
                    />
                    <TextField
                        disabled={!isEditable}
                        label="age"
                        wrapperClassName={s.input}
                        value={age}
                        changeHandler={onAgeChange}
                        errorMessage={errorNumber}
                    />
                    <TextField
                        disabled={!isEditable}
                        label="username"
                        wrapperClassName={s.input}
                        value={username}
                        changeHandler={onUserNameChange}
                    />
                    <TextField
                        disabled={!isEditable}
                        label="country"
                        wrapperClassName={s.input}
                        value={country}
                        changeHandler={onCountryChange}
                    />
                    <TextField
                        disabled={!isEditable}
                        label="city"
                        wrapperClassName={s.input}
                        value={city}
                        changeHandler={onCityChange}
                    />
                    <TextField
                        disabled={!isEditable}
                        label="currency"
                        wrapperClassName={s.input}
                        value={currency}
                        changeHandler={onCurrencyChange}
                    />
                    <TextField
                        disabled={!isEditable}
                        label="avatar"
                        wrapperClassName={s.input}
                        value={avatar}
                        changeHandler={onAvatarChange}
                    />
                </>
            )}
            {error && <Text textVariant="error">{t(error.key)}</Text>}
        </div>
    );
});

ProfileCard.displayName = 'ProfileCard';
