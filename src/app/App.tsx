import { useEffect } from 'react';
import { userActions } from 'src/entities/User';
import { User } from 'src/entities/User/types';
import { LOCAL_STORAGE_USER_AUTH_DATA } from 'src/shared/api';
import { RouterProvider } from './providers/RouterProvider';
import { NavBar } from 'src/widgets/Navbar';

import { Sidebar } from 'src/widgets/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInitialed } from 'src/entities/User';

export default function App() {
    const dispatch = useDispatch();

    const userInitialed = useSelector(selectUserInitialed);

    useEffect(() => {
        dispatch(userActions.initUser());

        if (__PROJECT__ !== 'storybook') {
            const jsonAuthData = localStorage.getItem(LOCAL_STORAGE_USER_AUTH_DATA);

            if (jsonAuthData) {
                const authData = JSON.parse(jsonAuthData) as User;
                if (authData.username) {
                    dispatch(userActions.setAuthData(authData));
                } else {
                    throw new Error('local storage return invalid user data');
                }
            }
        }
    }, [dispatch]);

    return (
        <div className="app">
            <NavBar />
            <div className="container">
                <Sidebar />
                <div className="pageContainer">{userInitialed && <RouterProvider />}</div>
            </div>
        </div>
    );
}
