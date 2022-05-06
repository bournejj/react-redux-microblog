import React, {useState} from 'react';
import {
Redirect,
    useParams
  } from "react-router-dom";
  import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button  } from "reactstrap";

import EditForm from './EditForm';
import Comment from './Comment'
  

const Post = ({blogs, deleteItem, editItem}) => {

  const INITIAL_STATE = {
    title: '',
    description: '',
    body: ''
}
const [formData, setFormData] = useState(INITIAL_STATE)



  const handleDeleteItem = (id) => {
    deleteItem(id)
   

}
console.log(blogs)

  const {postid} = useParams();
    console.log(blogs)


const post = blogs.filter(function(item){

  
      return  item.id === postid



});

const newPost = blogs.map(blog => {
  return blog.blog.id === postid ? {
    blog
  }
  : null
})


console.log(newPost.length)

const [clicked, setClicked] = useState('false'); 

const handleEditItem = () => {

setClicked('false')

};



    return (

      

      <div>
   { newPost.length > 0 ?
       
      <Card
      >
        <CardBody>
          <CardTitle tag="h5">
  {newPost[0].blog.blog.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
              {newPost[0].blog.blog.description}
          </CardSubtitle>
          <CardText>
          {newPost[0].blog.blog.body}
          </CardText>
          <Button onClick={() => handleDeleteItem(newPost[0].blog.blog.id)}>X</Button>
          <Button onClick={() => setClicked('true')}>Edit</Button>
      
        </CardBody>
       
   
       
      </Card>
      
      :  <Redirect to='/'/>}
      {clicked === 'true' ?
      <EditForm editItem={editItem} id={newPost[0].blog.blog.id}/>
      : null
    }
    <Comment/>
    </div>
      
      
    )

 
}

export default Post