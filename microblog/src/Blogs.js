import React from 'react';

const Blogs = ({title, description, body, id, deleteItem}) => {


    const handleDeleteItem = (e) => {
        e.preventDefault();
        
        deleteItem(id)
      

    }
  

    return (
        <div>
           <form onSubmit={handleDeleteItem}>
            <h1>{title}</h1>   
            <h2>{description}</h2>   
            <h3>{body}</h3>   
            <button>edit</button>
            <button>delete</button>
            </form>
    
        </div>
    )
}

export default Blogs