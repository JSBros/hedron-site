import styled from 'styled-components';
import { Container } from 'hedron';

const Wrapper = styled(Container)`
  ${props => `
    background: ${props.theme.navbar_background};
  `}
`;

export default Wrapper;
