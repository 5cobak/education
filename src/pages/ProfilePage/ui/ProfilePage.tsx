import { profileReducer } from 'src/entities/Profile';
import { useLayReducer } from 'src/shared/hooks/useLazyReducer';

import s from './index.scss';

import { memo } from 'react';
import { Profile } from 'src/entities/Profile';
import { Page } from 'src/shared/ui/Page';

const ProfilePage = memo(() => {
    useLayReducer('profile', profileReducer);

    return (
        <Page>
            <div className={s.profile}>
                <Profile />
            </div>
        </Page>
    );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
