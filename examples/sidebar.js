export default `<LayoutProvider debug={{ enabled: true }} gutter="25px">
  <Section fluid>
    <Container height="100%">
      <Box width={{ xs: '30%' }}>
        <Container height="100%" direction="vertical" alignY="end">
          <Box>
            <h1>Hedron</h1>
            <p>A no-frills flex-box grid system</p>
          </Box>
        </Container>
      </Box>
      <Box width={{ xs: '70%' }}>
        <Container
          direction="vertical"
          alignY="center"
          alignX="center"
          height="100%"
        >
          <Box>
            <img src="https://avatars0.githubusercontent.com/u/23329301?v=3&s=50" />
          </Box>
        </Container>
      </Box>
    </Container>
  </Section>
</LayoutProvider>`;
