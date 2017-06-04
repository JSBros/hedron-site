import Router from 'next/router';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-alive';
import { ThemeProvider } from 'styled-components';
import { LayoutProvider, Section, Container, Box } from 'hedron';

import 'data/global';
import theme from 'data/theme';
import { encode, decode, loader } from 'utils/router';
import Navigation from 'components/Navigation';
import README from 'examples/home';

class Editor extends React.PureComponent {
  constructor(props) {
    super(props);
    const { query: { code, example } } = props.url;
    this.state = {
      code: (code && decode(code)) || README,
      example,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { query } = nextProps.url;
    if (query !== this.props.url.query) {
      this.setState({
        code: query.code && decode(query.code),
        example: query.example,
      });
    }
  }

  fetchEditorCode() {
    return (
      (this.state.example && loader(this.state.example)) || this.state.code
    );
  }

  updateQuery(fromCode) {
    Router.push(`/?code=${encode(fromCode)}`);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <LiveProvider
          scope={{ LayoutProvider, Section, Container, Box }}
          code={this.fetchEditorCode()}
          onUpdate={this.updateQuery}
        >
          <LayoutProvider gutter="0px">
            <Section fluid>
              <Container direction="vertical" height="100vh">
                <Container wrap grow>
                  <Box grow width={{ md: '50%' }}>
                    <LiveEditor />
                  </Box>
                  <Box grow width={{ md: '50%' }}>
                    <LiveError />
                    <LivePreview />
                  </Box>
                </Container>
                <Navigation switcherProps={{ value: this.state.example }} />
              </Container>
            </Section>
          </LayoutProvider>
        </LiveProvider>
      </ThemeProvider>
    );
  }
}

export default Editor;
