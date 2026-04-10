import React, { useState } from 'react'
import Top from './Components/Top';

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(User);
    setUser('')
  }

  const [User, setUser] = useState("")

  const data = [
  {
    "id": 1,
    "name": "Amit Sharma",
    "department": "Engineering",
    "email": "amit.sharma@example.com",
    "salary": 60000
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "department": "Marketing",
    "email": "priya.verma@example.com",
    "salary": 55000
  },
  {
    "id": 3,
    "name": "Rahul Singh",
    "department": "HR",
    "email": "rahul.singh@example.com",
    "salary": 50000
  },
  {
    "id": 4,
    "name": "Sneha Gupta",
    "department": "Finance",
    "email": "sneha.gupta@example.com",
    "salary": 65000
  },
  {
    "id": 5,
    "name": "Vikas Yadav",
    "department": "Engineering",
    "email": "vikas.yadav@example.com",
    "salary": 70000
  },
  {
    "id": 6,
    "name": "Neha Kapoor",
    "department": "Sales",
    "email": "neha.kapoor@example.com",
    "salary": 48000
  },
  {
    "id": 7,
    "name": "Arjun Mehta",
    "department": "Engineering",
    "email": "arjun.mehta@example.com",
    "salary": 72000
  },
  {
    "id": 8,
    "name": "Pooja Nair",
    "department": "HR",
    "email": "pooja.nair@example.com",
    "salary": 52000
  },
  {
    "id": 9,
    "name": "Karan Malhotra",
    "department": "Marketing",
    "email": "karan.malhotra@example.com",
    "salary": 58000
  },
  {
    "id": 10,
    "name": "Anjali Desai",
    "department": "Finance",
    "email": "anjali.desai@example.com",
    "salary": 67000
  }
]

 

  return (
    <div className='min-h-screen bg-black text-white'>
      <Top/>
      <h1 className='text-xl'>Todo's Management Application !</h1>
      <p className='text-xs mb-3'>Welcome to our Prestigious Todo Management Platform</p> 
      <hr/>
      <form onSubmit={submitHandler}>
        <input 
          value={User}
          placeholder='Enter Your Todo' 
          className='border mt-5 ml-2'
          onChange={(e) => setUser(e.target.value)}
        >
        </input>
        <br/>
        <button className='m-2  border p-1 pr-2 text-xs'>Submit</button>
      </form>
      <hr/>
      <h1 clas>Your Work To Do</h1>
    </div>
  )
}

export default App