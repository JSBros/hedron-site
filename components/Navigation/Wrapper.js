import styled from 'styled-components';
import { Container } from 'hedron';

const Wrapper = styled(Container)`
  ${props => `
    background: ${props.theme.navbar_background};
    padding: ${props.theme.navbar_padding};
  `}
`;

export default Wrapper;
