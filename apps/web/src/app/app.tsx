// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { ChakraProvider } from '@chakra-ui/react';
import { LoginPage } from './login';

export function App() {
  return (
    <ChakraProvider>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
