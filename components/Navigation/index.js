import { Box } from 'hedron';

import Wrapper from './Wrapper';
import Switcher from 'components/Switcher';

const Navigation = ({ switcherProps, ...props }) =>
  <Wrapper {...props}>
    <Box style={{ overflow: 'visible' }}>
      <Switcher {...switcherProps} />
    </Box>
  </Wrapper>;

export default Navigation;
