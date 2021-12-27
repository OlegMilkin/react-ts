import React, {useEffect, useState} from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import {IUser} from './types/types';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
      fetchUsers()
  }, [])

  async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
      } catch (e) {
          alert(e)
      }
  }

  return (
    <div>
      <Card 
        height='200px'
        width='200px'
        variant={CardVariant.primary}
        onClick={(num) => console.log('click', num)}
       >
        <button>Button</button>
      </Card>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
