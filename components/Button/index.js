import styled from 'styled-components';

const Button = styled.a`
  ${props => `
    background: ${props.theme.button_background};
    border: ${props.theme.button_border};
    color: ${props.theme.button_foreground};
    border-radius: ${props.theme.button_radius};
  `}
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  padding: 8px 16px;
  transition: all 200ms ease;
  text-decoration: none;
  &:hover {
    ${props => `
      background: ${props.theme.button_hover_background};
      color: ${props.theme.button_hover_foreground};
    `}
  }
`;

export default Button;
