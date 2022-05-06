import { ADD_BLOG, EDIT_BLOG} from "./actionTypes";

export function addBlog(blog) {
  return {
    type: ADD_BLOG,
    payload: blog

  };
}
export function editBlog(blog) {
  console.log(blog)
  return {
    type: EDIT_BLOG,
    payload: blog.itemAttributes,
    id: blog.index
   
  };
}



