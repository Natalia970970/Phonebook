import { Nav, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
    return (
        <Nav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        </Nav>
    );
};