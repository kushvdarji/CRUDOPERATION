import React, { Fragment } from 'react'
import {Button,Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import {Link,useNavigate} from "react-router-dom"
function Home() {
    let history=useNavigate();
    const handleEdit=(id,name,age)=>
    {
        localStorage.setItem("Name",name);
        localStorage.setItem("Age",age);
        localStorage.setItem("Id",id)
    }
    const handleDelete =(id)=>
    {
        var index=Employee.map(function(e)
        {
            return e.id
        }).indexOf(id);
        Employee.splice(index,1);
        history("/");
    }
  return (
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length > 0 ?
                            Employee.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.Age}</td>
                                        <td>
                                        <Link to={`/edit`}>
                                            <Button onClick={()=>handleEdit(item.id,item.Name,item.Age)}>EDIT</Button></Link>&nbsp; 
                                            <Button onClick={()=>handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "Nope Data Yet"
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className='d-grid gap-2' to="/create"><Button size="lg">CREATE</Button></Link>
            </div>
        </Fragment>
  );
}

export default Home;