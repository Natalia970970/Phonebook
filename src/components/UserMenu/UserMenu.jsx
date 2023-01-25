import { useSelector, useDispatch } from 'react-redux';
import { logOut } from './../../redux/AuthOperations';
import { UserMenuLinks } from './UserMenu.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { HomeText } from '../../pages/HomePage.styled'

export const UserMenu = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOut());
    };
    return (
        <UserMenuLinks>
        <HomeText>{user.email}</HomeText>
        <Button onClick={() => handleLogout()}>Logout</Button>
        </UserMenuLinks>
    );
};
