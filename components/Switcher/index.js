import Router from 'next/router';
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import { encode } from 'utils/router';
import { examples } from 'data/config';
import Wrapper from './Wrapper';

const Switcher = ({ ...props }) =>
  <Wrapper>
    <Dropdown
      options={examples}
      onChange={e =>
        Router.push({ pathname: '/', query: { example: e.value } })}
      placeholder="Navigate"
      {...props}
    />
  </Wrapper>;

export default Switcher;
