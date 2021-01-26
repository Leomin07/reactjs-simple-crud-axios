import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button,
} from '@material-ui/core';

import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';

const UserTable = props => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>
              <AiOutlineEdit size="2em" onClick={() => props.editRow(user)} />
              <MdDeleteForever
                size="2em"
                onClick={() => props.deleteUser(user.id)}
              />
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={3}>No users</TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

export default UserTable;
