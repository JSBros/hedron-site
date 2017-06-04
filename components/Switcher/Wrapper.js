import styled from 'styled-components';

const Wrapper = styled.div`
  .Dropdown-root {
    position: relative;

    &.is-open {
      .Dropdown-arrow {
        border-color: transparent transparent #999;
        border-width: 0 5px 5px;
      }
    }

    .Dropdown-control {
      position: relative;
      overflow: hidden;
      ${props => `
        background: ${props.theme.button_background};
        border: ${props.theme.button_border};
        color: ${props.theme.button_foreground};
        border-radius: ${props.theme.button_radius};
      `}
      box-sizing: border-box;
      cursor: pointer;
      outline: none;
      padding: 8px 52px 8px 10px;
      transition: all 200ms ease;
    }

    .Dropdown-arrow {
      border-color: #999 transparent transparent;
      border-style: solid;
      border-width: 5px 5px 0;
      content: ' ';
      display: block;
      height: 0;
      margin-top: -ceil(2.5);
      position: absolute;
      right: 10px;
      top: 14px;
      width: 0;
    }

    .Dropdown-menu {
      ${props => `
        background: ${props.theme.menu_background};
        border: ${props.theme.menu_border};
        color: ${props.theme.menu_foreground};
        border-radius: ${props.theme.menu_radius};
        box-shadow: ${props.theme.menu_shadow};
      `}
      box-sizing: border-box;
      margin-top: -1px;
      max-height: 200px;
      overflow-y: auto;
      position: absolute;
      bottom: 100%;
      width: 100%;
      z-index: 1000;
      -webkit-overflow-scrolling: touch;
    }

    .Dropdown-option {
      ${props => `
        background: ${props.theme.menu_background};
        border-bottom: ${props.theme.menu_border};
        color: ${props.theme.menu_foreground};
      `}
      box-sizing: border-box;
      cursor: pointer;
      display: block;
      padding: 8px 10px;
      transition: all .15s ease-in;

      &:last-child {
        border-bottom: none;
      }
    }

    .Dropdown-option:last-child {
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;
    }

    .Dropdown-option:hover {
      ${props => `
        background: ${props.theme.menu_hover_background};
        color: ${props.theme.menu_hover_foreground};
      `}
    }

    .Dropdown-option.is-selected {
      background-color: #f2f9fc;
      color: #333;
    }

    .Dropdown-noresults {
      box-sizing: border-box;
      color: #ccc;
      cursor: default;
      display: block;
      padding: 8px 10px;
    }
  }
`;

export default Wrapper;
