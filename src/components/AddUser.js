import React, { useState } from 'react';
import { FormControl, Button, TextField } from '@material-ui/core';
import { RiUserAddLine } from 'react-icons/ri';

const AddUser = props => {
  const initialFormState = { id: null, name: '', username: '' };
  const [user, setUser] = useState(initialFormState);

  const handleTextFieldChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <FormControl>
      <div>
        <TextField
          style={{ width: '200%', margin: '10px 0' }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={user.name}
          onChange={handleTextFieldChange}
        />
      </div>
      <div>
        <TextField
          style={{ width: '200%', margin: '10px 0' }}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          value={user.userame}
          onChange={handleTextFieldChange}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={event => {
          event.preventDefault();
          if (!user.name || !user.username) return;
          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <RiUserAddLine size="2em" />
      </Button>
    </FormControl>
  );
};

export default AddUser;
