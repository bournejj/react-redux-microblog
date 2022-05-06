import React from 'react';
import { ADD_BLOG, EDIT_BLOG } from './actionTypes';
 



const INITIAL_STATE =  {
    blogs: [],
  posts: []
  }

  
function rootReducer(state = INITIAL_STATE, action) {
switch(action.type) {
  case ADD_BLOG:
  return { ...state, blogs: [...state.blogs, {blog: action.payload}] }
  case EDIT_BLOG:
  return ([
    ...state.blogs.slice(0,action.id),
    Object.assign({}, ...state.blogs[action.id], action.payload),
    ...state.blogs.slice(action.id+1)
 ]
);


   
        default:
            return {
                ...state
                
                
            }
}
}

export default rootReducer