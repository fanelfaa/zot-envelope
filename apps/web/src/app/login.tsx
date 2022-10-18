import { Box, Grid } from '@chakra-ui/react';

export const LoginPage = () => {
  return (
    <Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} h="100vh">
      <Box bg="blue">Envelope</Box>
      <Box bg="white">Right</Box>
    </Grid>
  );
};
