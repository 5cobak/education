import React, { memo, useCallback } from 'react';
import s from './index.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/Button';
import { TextField } from 'src/shared/ui/TextField';
import { Message } from 'src/shared/utils/translationUtils';
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

interface Props {
    firstName?: string;
    lastName?: string;
    age?: number;
    city?: string;
    country?: string;
    currency?: string;
    avatar?: string;
    username?: string;
    isLoading?: boolean;
    isEditable?: boolean;
    error?: Message | null;
}

export const ProfileCard = memo((props: Props) => {
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

    return (
        <div className={s.card}>
            <div className={s.cardAvatar}>{avatar && <Avatar src={avatar} />}</div>
            <div>
                <Text title={t('ProfilePage_Header')} />
                {props.isEditable ? (
                    <Button size="xl">{t('EditProfile_button')}</Button>
                ) : (
                    <Button size="xl">{t('EditProfile_button')}</Button>
                )}
            </div>
            {props.isLoading ? (
                <Loader />
            ) : (
                <>
                    <TextField
                        name="first name"
                        className={s.input}
                        value={firstName}
                        changeHandler={onFirstNameChange}
                    />
                    <TextField name="last name" className={s.input} value={lastName} changeHandler={onLastNameChange} />
                    <TextField
                        name="age"
                        className={s.input}
                        value={age}
                        changeHandler={onAgeChange}
                        errorMessage={errorNumber}
                    />
                    <TextField name="username" className={s.input} value={username} changeHandler={onUserNameChange} />
                    <TextField name="country" className={s.input} value={country} changeHandler={onCountryChange} />
                    <TextField name="city" className={s.input} value={city} changeHandler={onCityChange} />
                    <TextField name="currency" className={s.input} value={currency} changeHandler={onCurrencyChange} />
                    <TextField name="avatar" className={s.input} value={avatar} changeHandler={onAvatarChange} />
                </>
            )}
            {props.error && <Text>{t(props.error.key)}</Text>}
        </div>
    );
});

ProfileCard.displayName = 'ProfileCard';
