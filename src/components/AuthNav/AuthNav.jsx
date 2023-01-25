import { AuthNavLinks, PhoneBookNavLink } from './AuthNav.styled';

export const AuthNav = () => {
    return (
        <AuthNavLinks>
            <PhoneBookNavLink to="/register">Register</PhoneBookNavLink>
            <PhoneBookNavLink to="/login">Log In</PhoneBookNavLink>
        </AuthNavLinks>
    );
};
