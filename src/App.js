import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserLists from './components/User/UserLists';


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUser)=>{
      return[
        ...prevUser,
        {
          name : uName,
          age : uAge
        }
      ];
    });
  }

  let content = <h1 style={{color: 'white', textAlign: 'center'}}>No Users Added. </h1>

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      {
        userList.length === 0 ? content : <UserLists users = {userList}/>
      }
    </div>
  );
}

export default App;
