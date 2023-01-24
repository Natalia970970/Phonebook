// import { LogoutBtn, UserMenuLinks, User } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
// import { selectUser } from 'Redux/auth/authSelectors';
import { logOut } from './../../redux/AuthOperations';
export const UserMenu = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOut());
    };
    return (
        <ul>
        <li>{user.email}</li>
        <button onClick={() => handleLogout()}>Logout</button>
        </ul>
    );
};
