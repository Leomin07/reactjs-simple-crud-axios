import React, { useState, useEffect } from 'react';
import { FormControl, Button, TextField, Box } from '@material-ui/core';
import { GrUpdate } from 'react-icons/gr';
import { GiCancel } from 'react-icons/gi';

const EditUser = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

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
          value={user.username}
          onChange={handleTextFieldChange}
        />
      </div>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={event => {
            event.preventDefault();
            props.updateUser(user.id, user);
          }}
        >
          <GrUpdate size="2em" />
        </Button>
        <Button
          style={{ marginLeft: '10px' }}
          variant="contained"
          color="secondary"
          onClick={() => props.setEditing(false)}
          className="Button muted-Button"
        >
          <GiCancel size="2em" />
        </Button>
      </Box>
    </FormControl>
  );
};

export default EditUser;
