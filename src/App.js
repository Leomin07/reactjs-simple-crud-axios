import React, { useState, useEffect } from 'react';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { Container } from '@material-ui/core';
import axios from 'axios';

const App = () => {
  const usersData = [];

  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://600a8854778d1a0017793fb4.mockapi.io/simple-crud'
      );
      setUsers(response.data);
    };
    fetchData();
  }, []);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', userName: '' };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <Container>
        <h1>CRUD Simple with Hook</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUser
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add User</h2>
                <AddUser addUser={addUser} />
              </div>
            )}
          </div>
          <div className="flex-large">
            <h2>List users</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editRow={editRow}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
