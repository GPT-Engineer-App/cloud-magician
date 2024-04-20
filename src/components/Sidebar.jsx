import { Box, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { FaUsers, FaLock } from "react-icons/fa";

function Sidebar() {
  return (
    <Box w="200px" p="5" bg="gray.100">
      <List spacing={2}>
        <ListItem>
          <ListIcon as={FaUsers} color="green.500" />
          <Link href="/dashboard/roles">Roles</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={FaLock} color="blue.500" />
          <Link href="/dashboard/permissions">Permissions</Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
