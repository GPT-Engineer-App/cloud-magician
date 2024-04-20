import React, { useState, useEffect } from "react";
import { Box, Button, Input, Table, Thead, Tbody, Tr, Th, Td, useToast } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Roles() {
  const [roles, setRoles] = useState([]);
  const [newRoleName, setNewRoleName] = useState("");
  const toast = useToast();

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    const response = await fetch("https://backengine-znib.fly.dev/roles");
    const data = await response.json();
    setRoles(data);
  };

  const handleCreateRole = async () => {
    const response = await fetch("https://backengine-znib.fly.dev/roles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newRoleName }),
    });
    if (response.ok) {
      toast({
        title: "Role created successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      fetchRoles();
    }
  };

  const handleDeleteRole = async (roleId) => {
    const response = await fetch(`https://backengine-znib.fly.dev/roles/${roleId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      toast({
        title: "Role deleted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      fetchRoles();
    }
  };

  return (
    <Box p={5}>
      <h1>Roles Management</h1>
      <Box my={4}>
        <Input placeholder="New Role Name" value={newRoleName} onChange={(e) => setNewRoleName(e.target.value)} />
        <Button onClick={handleCreateRole} ml={2}>
          Add Role
        </Button>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {roles.map((role) => (
            <Tr key={role.id}>
              <Td>{role.name}</Td>
              <Td>
                <Button onClick={() => handleDeleteRole(role.id)} size="sm" colorScheme="red">
                  <FaTrash />
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Roles;
