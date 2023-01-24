import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
    return (
        <ul>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
        </ul>
    );
};
