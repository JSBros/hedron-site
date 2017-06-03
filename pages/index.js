import Router from 'next/router';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-alive'
import { LayoutProvider, Section, Container, Box } from 'hedron';
import base64 from 'base-64';
import '../global';

const code = `<LayoutProvider>
  <Section fluid>
    <Container hAlign="center" direction="vertical">
      <Box className="header">
        <img src="http://i.imgur.com/1f9IIN8.png" alt="hedron logo" />
        <p>A no-frills flexbox grid system for React, powered by styled-components.</p>
      </Box>

      <Box width="100%" className="inverted">
        <h2>Installation</h2>
        <pre>npm install --save hedron@next</pre>
      </Box>
    </Container>
  </Section>
</LayoutProvider>`;

class Editor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      code: this.fetchCodeFromQuery() || code
    };
  }
  componentWillReceiveProps(nextProps) {
    const { query } = nextProps.url;
    this.setState({ code: base64.decode(decodeURIComponent(query.code)) });
  }
  fetchCodeFromQuery() {
    const { query } = this.props.url;
    return query.code ? base64.decode(decodeURIComponent(query.code)) : undefined;
  }
  updateQuery(fromCode) {
    Router.push(`/?code=${encodeURIComponent(base64.encode(fromCode))}`);
  }
  render() {
    return (
      <LiveProvider
        scope={{ LayoutProvider, Section, Container, Box }}
        code={this.state.code}
        onUpdate={this.updateQuery}
      >
        <LayoutProvider gutter="0px">
          <Section fluid>
            <Container height="100vh" wrap>
              <Box grow width={{ md: "50%" }} height={{ xs: "50vh", md: "100vh" }}>
                <LiveEditor />
              </Box>
              <Box grow width={{ md: "50%" }} height={{ xs: "50vh", md: "100vh" }}>
                <LiveError />
                <LivePreview />
              </Box>
            </Container>
          </Section>
        </LayoutProvider>
      </LiveProvider>
    );
  }
}

export default Editor;
