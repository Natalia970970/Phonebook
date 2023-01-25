import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { LayoutStyled } from './LayoutStyled'

export const Layout = () => {
    return (
        <LayoutStyled>
        <AppBar />
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
        </LayoutStyled>
    );
};
