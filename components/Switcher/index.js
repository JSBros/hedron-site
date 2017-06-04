import Router from 'next/router';
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import { encode } from 'utils/router';
import { examples } from 'config';
import Wrapper from './Wrapper';

const onChange = example => {
  const newExample = require(`../../examples/${example}`).default;
  console.info(newExample)
 Router.push(`/?code=${encode(newExample)}`);
}

const Switcher = ({ ...props }) => (
  <Wrapper>
    <Dropdown
      {...props}
      options={examples}
      onChange={e => onChange(e.value)}
      placeholder="Navigate"
    />
  </Wrapper>
);

export default Switcher;
