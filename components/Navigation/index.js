import { Box } from 'hedron';

import Wrapper from './Wrapper';
import Switcher from 'components/Switcher';

const Navigation = props =>
  <Wrapper>
    <Box style={{ overflow: 'visible' }}>
      <Switcher />
    </Box>
  </Wrapper>;

export default Navigation;
