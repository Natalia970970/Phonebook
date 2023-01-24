import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
// import { Header } from './AppBar.styled';
import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from './../../Redux/auth/authSelectors';

export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <div>
        {isLoggedIn && <Navigation />}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
    );
};
