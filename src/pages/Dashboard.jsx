import { Box, Text } from '@chakra-ui/react';

function Dashboard() {
 
  const roles = ['Admin', 'User', 'Guest'];

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">Dashboard</Text>
      {roles.map((role, index) => (
        <Text key={index}>{role}</Text>
      ))}
    </Box>
  );
}

export default Dashboard;