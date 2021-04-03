import React,{useState,useEffect,Fragment} from 'react'; 
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

function Users()
{
    const [user,setUser]=useState([])

    useEffect(()=>{
      fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
        data.json().then(result=>{
          console.warn("result",result)
          setUser(result.data)
        })
      })
    },[])
    return(
        <Fragment>
            <h1>users are listed here</h1>
          {
                //user.length===23?<div>yes,its right</div>:<div>this is not right</div>
             
                user.map((item,i)=>
                <div key ={i}>{item.name},{item.age}</div>
                )
            }
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
            <Button variant="link">Link</Button>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Salary</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    {
        user.map((item,index)=>
        <tr key ={index}>
            <td>{item.id}</td>
            <td>{item.employee_name}</td>
            <td>{item.employee_salary}</td>
            <td>{item.employee_age}</td>
    </tr>)
    }
  </tbody>
</Table>
        </Fragment>
    )
}

export default Users;