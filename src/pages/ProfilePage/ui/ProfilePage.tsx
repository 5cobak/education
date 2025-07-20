import { profileReducer } from 'src/entities/Profile';
import { useLayReducer } from 'src/shared/hooks/useLazyReducer';

import s from './index.scss';

import { memo } from 'react';
import { Profile } from 'src/entities/Profile';

const ProfilePage = memo(() => {
    useLayReducer('profile', profileReducer);

    return (
        <div className={s.profile}>
            <Profile />
        </div>
    );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
