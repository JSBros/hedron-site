import { LayoutProvider, Box } from 'hedron';

import { links } from 'data/config';
import Button from 'components/Button';
import Switcher from 'components/Switcher';
import Wrapper from './Wrapper';

const Navigation = ({ switcherProps, ...props }) =>
  <LayoutProvider gutter="8px">
    <Wrapper {...props}>
      <Box style={{ overflow: 'visible' }}>
        <Switcher {...switcherProps} />
      </Box>

      {links.map((link, index) =>
        <Box shift={index === 0 && 'auto'} key={index}>
          <Button href={link.url} target="_blank">{link.title}</Button>
        </Box>
      )}
    </Wrapper>
  </LayoutProvider>;

export default Navigation;
