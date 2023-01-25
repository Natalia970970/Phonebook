import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AppBarStyle } from './AppBar.styled';
import { useSelector } from 'react-redux';

export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <AppBarStyle>
            {isLoggedIn && <Navigation />}
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </AppBarStyle>
    );
};
