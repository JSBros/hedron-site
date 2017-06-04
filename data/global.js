import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    font-family: sans-serif;
  }
  .inverted {
    background-color: #1D1F21;
    color: white;
  }

  img {
    max-width: 100%;
  }

  .header {
    text-align: center;
  }

  .react-live-preview, .prism-code {
    display: flex;
    flex-grow: 1;
    overflow: auto;
  }

  .react-live-error {
    background: red;
    color: white;
    font-family: monospace;
    white-space: pre;
    padding: 15px;
  }
`;
