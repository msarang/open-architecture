import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavItem = styled(Link)`
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

export default NavItem;
