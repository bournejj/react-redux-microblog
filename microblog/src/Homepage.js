import React from 'react';
import Blogs from './Blogs';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button  } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Home = ({blogs, deleteItem}) => {
console.log(blogs)

const handleDeleteItem = (id) => {
    deleteItem(id)
  

}

const rdBlogs = useSelector(store => store.blogs)

    return (
     
        <div>
        
        { rdBlogs?.map((blog) => (


          
            <div>
             
            <Card
            >
              <CardBody>
                <CardTitle tag="h5">
                <Link exact to={`/${blog.blog.id}`} >
               
                {blog.blog.title}
        </Link>
                    
                 
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {blog.blog.description}
                </CardSubtitle>
                <Button onClick={() => handleDeleteItem(blog.blog.id)}>X</Button>
           
                
              </CardBody>
            </Card>
          </div>
           
 
  ))}

        </div>
    )

}

export default Home