import React, { useState } from "react";

const users = [
  { name: "sarah", age: 20 },
  { name: "john", age: 20 },
  { name: "michael", age: 20 },
  { name: "alan", age: 20 },
];
const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
    // console.log(foundUser);
  };
  return (
    <div>
      User Search
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>click me</button>
      <div className=''>{user?.name}</div>
    </div>
  );
};

export default UserSearch;
