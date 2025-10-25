import React, { useState } from "react";

function DerivedState() {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);
  
  //Derived State : count of user
  console.log(users);
  const userCnt = users.length;
  // Derived State : average age of users
  const averageAge = users.reduce((acc , currElem , idx)=>{
     return  acc + currElem.age;
  },0)
  return (
    <div className="main-div">
      <h1>Users List </h1>
      <ul>
        {users.map((currElem, idx) => {
          return (
            <li key={idx}>
              {currElem.name} = {currElem.age} year old
            </li>
          );
        })}
      </ul>
      <p> Total users count :{userCnt}</p>
       <p>Average Age : {averageAge / userCnt}</p>
    </div>
  );
}

export default DerivedState;
