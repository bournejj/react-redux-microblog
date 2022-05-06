import React, {useState} from 'react'

const CommentForm = ({addComment}) => {

  
  const INITIAL_STATE = {
     comment: '',
     
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
      
      addComment( formData.comment)
      console.log(formData.comment)
  
  }
  
  
  return (
      <div>
   
      <form onSubmit={handleSubmit}>
          <label htmlFor='comment'>Comment</label>
          <input
          type='text'
          name='comment'
          value={formData.comment}
          onChange={handleChange}
          />
       
         
         
          <button>save</button>
    
  
            <p>{formData.comment}</p>
          
  
      </form>
  
      </div>
  )
  }
  
  
  export default CommentForm