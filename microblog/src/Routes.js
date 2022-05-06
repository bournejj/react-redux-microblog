import React, { useState,
    useEffect} from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter
 
} from 'react-router-dom';
import Blogs from './Blogs';
import NewBlogForm from './AddNewBlogForm';
import Post from './Post';
import { v4 as uuidv4 } from 'uuid';
import Home from './Homepage';
import { useSelector, useDispatch } from "react-redux";
import { addBlog , editBlog } from './actions';




function Routes() {
    const [blogs, setBlogs] = useState([])

    const dispatch = useDispatch();
  const rdBlogs = useSelector(store => store.blogs)

  const addItem = (title, description, body) => {

    dispatch(addBlog({id: uuidv4(),title,description,body}))

    setBlogs(blog => [...blogs, {id: uuidv4(), title, description, body}])

console.log(rdBlogs)

  }

  const deleteItem = (id) => {
    const blogsToKeeep = blogs.filter((blog) => {
        return blog.id !== id;
      });
      setBlogs(blogsToKeeep)
  }

  const editItem = (id, itemAttributes) => {
    var index = blogs.findIndex(x=> x.id === id);

    dispatch(editBlog({index, itemAttributes}))
   
    // setBlogs([
    //        ...blogs.slice(0,index),
    //        Object.assign({}, ...blogs[index], itemAttributes),
    //        ...blogs.slice(index+1)
    //     ]
    //   );
      console.log(itemAttributes)
  }
 
  
    // const updateItem = (id, itemAttributes) => {
    //   var index = blogs.findIndex(x=> x.id === id);
    //   console.log(index)
    
    //     // handle error
    
    //     // setBlogs({
    //     //   items: [
    //     //      ...this.state.items.slice(0,index),
    //     //      Object.assign({}, this.state.items[index], itemAttributes),
    //     //      ...this.state.items.slice(index+1)
    //     //   ]
    //     // });
    // }


    return (
   
          <Switch>
            <Route exact path="/">
              <Home blogs={blogs} deleteItem={deleteItem}/>
            </Route>
            <Route exact path="/newpost">
              <NewBlogForm addItem={addItem}/>
            </Route>
            <Route exact path="/:postid">
              <Post blogs={rdBlogs} deleteItem={deleteItem} editItem={editItem}/>
            </Route>
           
          </Switch>
    
      );
    }

export default Routes;