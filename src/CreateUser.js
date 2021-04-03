import React,{useState} from 'react'; 
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

function CreateUser()
{
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
function makeUser(){
    let data={name,age}
    console.warn("called",data)
}
    return(
        <div>
            <h1>users are listed here</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} name="username" value={name} />
            <br /><br />
            <input type="text"  onChange={(e)=>setAge(e.target.value)} name="age" value={age} />
            <br /><br />
            <button onClick={makeUser}>Create User</button>
            </div>
    
    )
}

export default CreateUser;