import Content from 'components/Content';
import theme from 'providers/theme';
import { ToastContainer } from 'react-toastify';
import { Flex } from 'rebass';
import { ThemeProvider } from 'theme-ui';
import { Card, CardContent } from 'ui-neumorphism';

import 'ui-neumorphism/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <Flex
      alignItems="center"
      flexDirection="column"
      height="100vh"
      justifyContent="flex-start"
      margin="auto"
      maxWidth="1200px"
      py="5"
      px="3"
    >
      <Card maxWidth={1200} style={{ width: '100%' }}>
        <CardContent>
          <Content />
        </CardContent>
      </Card>

      <ToastContainer
        position="top-center"
        autoClose={7000}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnHover={true}
        style={{ color: '#fff' }}
      />
    </Flex>
  </ThemeProvider>
);

export default App;
