import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavLinks = styled.div`
    display: flex;
    gap: 20px;
`;

export const PhoneBookNavLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    font-size: 20px;
    margin-right: 40px;
    display: flex;
    align-items: center;
    
    &.active {
        color: #88e3fa;
    }
    &:hover:not(.active),
    &:focus-visible:not(.active) {
        color: lightgrey;
        transition: 500ms;
    }
`