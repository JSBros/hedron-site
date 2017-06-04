import Router from 'next/router';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-alive';
import { ThemeProvider } from 'styled-components';
import { LayoutProvider, Section, Container, Box } from 'hedron';

import 'data/global';
import theme from 'data/theme';
import { encode, decode } from 'utils/router';
import Navigation from 'components/Navigation';
import README from 'examples/home';

class Editor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      code: this.fetchCodeFromQuery() || README,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { query } = nextProps.url;
    if (query !== this.props.url.query) {
      this.setState({ code: decode(query.code) });
    }
  }
  fetchCodeFromQuery() {
    const { query } = this.props.url;
    return query.code ? decode(query.code) : undefined;
  }
  updateQuery(fromCode) {
    Router.push(`/?code=${encode(fromCode)}`);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LiveProvider
          scope={{ LayoutProvider, Section, Container, Box }}
          code={this.state.code}
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
                <Navigation />
              </Container>
            </Section>
          </LayoutProvider>
        </LiveProvider>
      </ThemeProvider>
    );
  }
}

export default Editor;
