"use client";

import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function Adduser() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const dispatch = useDispatch();  
  const userDispatch = () =>{
        dispatch(addUser({name,email}));
        setName('');
        setEmail('');
  }
  return (
    <div className="form-section">
      <h2>Add User</h2>
      <form id="addUserForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          placeholder="Enter name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter email"
        />

        <button type="submit" onClick={userDispatch}>Add User</button>
      </form>
      <Link href='/removeuser' style={{marginTop:'10px',display:'inline-block',fontSize:'14px',fontFamily:'math',color:'blueviolet'}}>Remove user page</Link>
    </div>
  );
}
