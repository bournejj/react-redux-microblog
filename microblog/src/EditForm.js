import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {FormGroup, Label, Input, FormText, Button, Form  } from "reactstrap";

const EditForm = ({id, editItem}) => {
  console.log(editItem)

const INITIAL_STATE = {
    title: '',
    description: '',
    body: ''
}
const [formData, setFormData] = useState(INITIAL_STATE)

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
        ...formData,
        [name]: value
    }))
}
const handleSubmit = (e) => {
    e.preventDefault();
    
    editItem(id, {title: formData.title, description: formData.description, body: formData.body})
    console.log(formData.description)

}


return (
    <div>
    
    {/* <Form>
<FormGroup>
<Label for="exampleEmail">
  Email
</Label>
<Input
  id="exampleEmail"
  name="email"
  placeholder="with a placeholder"
  type="email"
/>
</FormGroup>
<FormGroup>
<Label for="examplePassword">
  Password
</Label>
<Input
  id="examplePassword"
  name="password"
  placeholder="password placeholder"
  type="password"
/>
</FormGroup>

<FormGroup>


</FormGroup>
<FormGroup>
<Label for="exampleText">
  Text Area
</Label>
<Input
  id="exampleText"
  name="text"
  type="textarea"
/>
</FormGroup>

<Button>
Submit
</Button>
</Form> */}
    <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
        type='text'
        name='title'
        value={formData.name}
        onChange={handleChange}
        />
        <label htmlFor='description'>Description</label>
        <input
        type='text'
        name='description'
        value={formData.description}
        onChange={handleChange}
        />
        <label htmlFor='body'>body</label>
        <input
        type='text'
        name='body'
        value={formData.body}
        onChange={handleChange}
        />
  
       
        <button>save</button>
  
        <Link to={'/'} >
        <button>Cancel</button>
          </Link>

          <p>{formData.title}</p>
        

    </form>

    </div>
)
}


export default EditForm