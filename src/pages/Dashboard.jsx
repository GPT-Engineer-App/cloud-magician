import { Box, Text, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const roles = ["Admin", "User", "Guest"];

  return (
    <Flex>
      <Sidebar />
      <Box p="5">
        <Text fontSize="2xl" fontWeight="bold">
          Dashboard
        </Text>
        {roles.map((role, index) => (
          <Text key={index}>{role}</Text>
        ))}
      </Box>
    </Flex>
  );
}

export default Dashboard;
