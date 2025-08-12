import React, { ReactNode } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUserName } from 'src/entities/User';
import { RoutePaths } from '../types';

interface Props {
    children: ReactNode;
}

export const RequiredAuth = (props: Props) => {
    const username = useSelector(selectUserName);
    const location = useLocation();

    if (!username) {
        return <Navigate replace state={{ from: location }} to={RoutePaths.MAIN} />;
    }

    return <>{props.children}</>;
};
