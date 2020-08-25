import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const NavItemHash = styled(HashLink)`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1F214D;
    opacity: 0.5;
    padding-right: 10px;
    &:hover {
        opacity: 1;
        text-decoration: none;
    }
`;

export default NavItemHash;
