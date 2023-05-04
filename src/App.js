import CreateUsers from "./components/Users/CreateUsers";
import UsersList from "./components/Users/UsersList";
import React, {useState} from "react";
const App = () => {

    const [userList, setUserList] = useState([]);

    const createNewUsers = (name,age) =>{
      setUserList((item) =>{
        return [...item, {name,age, id:Math.random().toString()}]
      })
    }
  
  return <div>
        <CreateUsers createNewUsers={createNewUsers}/>
        <UsersList users={userList}/>
  </div>;
};

export default App;
