import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled(Link)`
    font-family: 'Cabin', sans-serif;
    color: #1F214D;
    font-size: 25px;
    font-weight: bold;
    &:hover {
        color: #1F214D;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        font-size: 20px;
      }
`;

export default Title;
