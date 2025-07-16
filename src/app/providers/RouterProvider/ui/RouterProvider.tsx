import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../lib/routerConfig';
import { useSelector } from 'react-redux';
import { selectUserName } from 'src/entities/User/model/selectors/selectUserName/selectUserName';
export const RouterProvider = () => {
    const username = useSelector(selectUserName);

    return (
        <Routes>
            {Object.values(routerConfig).map((route) => {
                if (route.isPrivate && !username) {
                    return null;
                }
                return <Route key={route.path} path={route.path} element={route.element} />;
            })}
        </Routes>
    );
};
