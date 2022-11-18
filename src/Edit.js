import React ,{useState,useEffect} from "react";
import { Button , Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Components/Employee';
import {useNavigate} from "react-router-dom"

function Edit()
{
function saveLanguage()
{
  var courses=JSON.parse(localStorage.getItem("courses") || "[]");
  var course={
    Name:name,
    Age:age
  }
  courses.push(course)
  localStorage.setItem("courses",JSON.stringify(courses))
}
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [id, setId] = useState("");
let history =useNavigate()
var index=Employee.map(function(e)
{
    return e.id
}).indexOf(id);
const handleSubmit =(e) =>
    {
        e.preventDefault();

        let a =Employee[index];
        a.Name=name;
        a.Age=age;

        history("/")
    }
    useEffect(()=>
    {
        setName(localStorage.getItem("Name"))
        setAge(localStorage.getItem("Age"))
        setId(localStorage.getItem("Id"))

    },[])
return(
    <>
         <Form className="d-grid gap-2" style={{margin : "15rem"}} onSubmit={saveLanguage}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e)=>setName(e.target.value)} >

                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e)=>setAge(e.target.value)} >

                    </Form.Control>
                </Form.Group>
                <Button type="submit" onClick={(e)=> handleSubmit(e)}>Update</Button>
            </Form>
    </>
)


}
export default Edit;