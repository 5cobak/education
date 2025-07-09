import { useDispatch, useSelector } from 'react-redux';
import { profileReducer, selectProfileData, selectProfileIsLoading } from 'src/entities/Profile';
import { useLayReducer } from 'src/shared/hooks/useLazyReducer';

import s from './index.scss';

import { memo, useEffect } from 'react';
import { fetchProfileData } from 'src/entities/Profile';

import { selectProfileError } from 'src/entities/Profile';
import { ProfileCard } from 'src/features/ProfileCard';
import profileCardReducer, { profileCardActions } from 'src/features/ProfileCard/model/slice/profileCardSlice';

const ProfilePage = memo(() => {
    const error = useSelector(selectProfileError);
    const isLoading = useSelector(selectProfileIsLoading);
    const dispatch = useDispatch();
    const profileData = useSelector(selectProfileData);
    useLayReducer('profile', profileReducer);
    useLayReducer('profileCard', profileCardReducer);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    useEffect(() => {
        if (profileData) {
            dispatch(profileCardActions.setProfileData(profileData));
        }
    }, [dispatch, profileData]);

    return (
        <div className={s.profile}>
            <ProfileCard error={error} isLoading={isLoading} />
        </div>
    );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
