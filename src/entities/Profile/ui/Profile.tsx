import React, { memo, useCallback, useEffect, useMemo } from 'react';
import s from './index.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/Button';
import { TextField } from 'src/shared/ui/TextField';

import { Text } from 'src/shared/ui/Text';
import { Loader } from 'src/shared/ui/Loader';
import { useValidationNumber } from 'src/shared/hooks/useValidationNumber';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfileLastName } from '../model/selectors/selectProfileLastName/selectProfileLastName';
import { selectProfileAge } from '../model/selectors/selectProfileAge/selectProfileAge';
import { selectProfileFirstName } from '../model/selectors/selectProfileFirstName/selectProfileFirstName';
import { selectProfileCity } from '../model/selectors/selectProfileCity/selectProfileCity';
import { selectProfileCountry } from '../model/selectors/selectProfileCountry/selectProfileCountry';
import { selectProfileCurrency } from '../model/selectors/selectProfileCurrency/selectProfileCurrency';
import { selectProfileAvatar } from '../model/selectors/selectProfileAvatar/selectProfileAvatar';
import { profileActions } from '../model/slice/profileSlice';
import { Avatar } from 'src/shared/ui/Avatar';
import { editProfile } from '../model/services/editProfile/editProfile.async';

import { selectProfileIsEditable } from '../model/selectors/selectProfileIsEditable/selectProfileIsEditable';

import classNames from 'classnames';
import { ProfileData, ProfileValidationError } from '../types';
import { getProfileValidationErrors } from '../model/services/validateProfile/getProfileValidationErrors';
import { selectProfileForm } from '../model/selectors/selectProfileForm/selectProfileForm';
import { ApiError } from 'src/shared/api';
import { selectProfileUserName } from '../model/selectors/selectProfileUsername/selectProfileUsername';
import { selectProfileData } from '../model/selectors/selectProfileData/selectProfileData';
import { selectProfileError } from '../model/selectors/selectProfileError/selectProfileError';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { selectProfileIsLoading } from '../model/selectors/selectProfileIsLoading/selectProfileIsLoading';
import { selectProfileInitialed } from '../model/selectors/selectProfileInitialed/selectProfileInitialed';

interface Props {
    userData?: ProfileData;
}

export const Profile = memo((props: Props) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const profileData = useSelector(selectProfileData);
    const firstName = useSelector(selectProfileFirstName);
    const lastName = useSelector(selectProfileLastName);
    const profileAge = useSelector(selectProfileAge);
    const city = useSelector(selectProfileCity);
    const country = useSelector(selectProfileCountry);
    const currency = useSelector(selectProfileCurrency);
    const avatar = useSelector(selectProfileAvatar);
    const username = useSelector(selectProfileUserName);
    const data = useSelector(selectProfileForm);
    const isEditable = useSelector(selectProfileIsEditable);

    const fetchProfileError = useSelector(selectProfileError);
    const editProfileError = useSelector(selectProfileError);
    const isLoading = useSelector(selectProfileIsLoading);
    const isInitialed = useSelector(selectProfileInitialed);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    useEffect(() => {
        if (profileData) {
            dispatch(profileActions.setProfileData(profileData));
        }
    }, [dispatch, profileData]);

    const error = useMemo(() => {
        return fetchProfileError ?? editProfileError;
    }, [fetchProfileError, editProfileError]);

    const age = useValidationNumber(profileAge);

    const onFirstNameChange = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileFirstName(value));
        },
        [dispatch]
    );

    const onLastNameChange = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileLastName(value));
        },
        [dispatch]
    );

    const onUserNameChange = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileUsername(value));
        },
        [dispatch]
    );

    const onCountryChange = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileCountry(value));
        },
        [dispatch]
    );

    const onCityChange = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileCity(value));
        },
        [dispatch]
    );

    const onAgeChange = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileAge(value));
        },
        [dispatch]
    );

    const onCurrencyChange = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileCurrency(value));
        },
        [dispatch]
    );

    const onAvatarChange = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileAvatar(value));
        },
        [dispatch]
    );

    const editProfileHandler = useCallback(() => {
        dispatch(profileActions.editProfile());
    }, [dispatch]);

    const applyEditableProfileHandler = useCallback(() => {
        dispatch(editProfile());
    }, [dispatch]);

    const cancelEditableProfileHandler = useCallback(() => {
        dispatch(profileActions.cancelEditProfile());

        if (props.userData) {
            dispatch(profileActions.setProfileData(props.userData));
        }
    }, [dispatch, props.userData]);

    const cardMods = useMemo(
        () => ({
            [s['isEditable']]: isEditable,
        }),
        [isEditable]
    );

    const errors = useMemo(() => {
        return getProfileValidationErrors(data, error ? [error] : []);
    }, [data, error]);

    const errorMap = {
        [ProfileValidationError.INCORRECT_FIRST_NAME]: t('profileValidation_error_firstName'),
        [ProfileValidationError.INCORRECT_LAST_NAME]: t('profileValidation_error_lastName'),
        [ProfileValidationError.NO_DATA]: t('profileValidation_error_noData'),
        [ProfileValidationError.INCORRECT_USER_NAME]: t('profileValidation_error_username'),
        [ApiError.AUTH_ERROR]: t('api_error_authError'),
        [ApiError.SERVER_ERROR]: t('api_error_serverError'),
    };

    if (!isInitialed) {
        return <Loader />;
    }

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
                            <Button
                                disabled={!!errors.length}
                                onClick={applyEditableProfileHandler}
                                theme="success"
                                size="xl"
                            >
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

                    {errors.length > 0 && (
                        <div className={s.validationErrorWrapper}>
                            {errors.map((error) => {
                                return (
                                    <Text key={error} textVariant="error">
                                        {errorMap[error]}
                                    </Text>
                                );
                            })}
                        </div>
                    )}
                    <TextField
                        disabled={!isEditable}
                        width="l"
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
                        label="username"
                        wrapperClassName={s.input}
                        value={username}
                        changeHandler={onUserNameChange}
                    />
                    <TextField
                        disabled={!isEditable}
                        label="age"
                        wrapperClassName={s.input}
                        value={age}
                        changeHandler={onAgeChange}
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
        </div>
    );
});

Profile.displayName = 'profile';
