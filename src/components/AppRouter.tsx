import React from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {

    const {isAuth} = useTypedSelector(state=> state.auth);
    return (
        isAuth ?
        <Routes>
            {privateRoutes.map(route =>
            <Route
                path={route.path}
         //      exact={route.exact}
                element={<route.component/>}
                key={route.path}
                />
            )}
            <Route path={RouteNames.NAVIGATE} element={<Navigate replace to={RouteNames.EVENT}/>}/>
        </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                  //     exact={route.exact}
                        element={<route.component/>}
                        key={route.path}
                    />
                )}
                <Route path={RouteNames.NAVIGATE} element={<Navigate replace to={RouteNames.LOGIN}/>}/>
            </Routes>

    );
};

export default AppRouter;