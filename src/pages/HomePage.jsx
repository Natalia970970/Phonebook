import { HomeBox, MainTitle, HomeText, HomeLink } from './HomePage.styled';
import { useSelector } from 'react-redux';

export const Home = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <HomeBox>
            <MainTitle>
                Your Phonebook
            </MainTitle>
            {!isLoggedIn && 
                <HomeText>Please <HomeLink to="/register">register</HomeLink> or <HomeLink to="/login">login</HomeLink> to use Your Phonebook</HomeText>
            }
        </HomeBox>
        );
};
