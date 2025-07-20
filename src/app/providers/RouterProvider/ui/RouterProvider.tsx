import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../lib/routerConfig';
import { RequiredAuth } from './RequiredAuth';

export const RouterProvider = () => {
    return (
        <Routes>
            {Object.values(routerConfig).map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.isPrivate ? <RequiredAuth>{route.element}</RequiredAuth> : route.element}
                    />
                );
            })}
        </Routes>
    );
};
