import { profileReducer } from 'src/entities/Profile';
import { useLayReducer } from 'src/shared/hooks/useLazyReducer';

import s from './index.scss';

import { memo } from 'react';
import { Profile } from 'src/entities/Profile';
import { Page } from 'src/shared/ui/Page';

const PROFILE_PAGE_SCROLL_POSITION = 'PROFILE_PAGE_SCROLL_POSITION';

const ProfilePage = memo(() => {
    useLayReducer('profile', profileReducer);

    return (
        <Page storageKey={PROFILE_PAGE_SCROLL_POSITION}>
            <div className={s.profile}>
                <Profile />
            </div>
        </Page>
    );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
