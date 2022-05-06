import React, {useState} from 'react'
import CommentForm from './CommentForm'

const Comment = () => {

    const [comments, setComments] = useState([])

    const addComment = (comment) => {
        

            setComments(blog => [...comments, { comment}])
        
          console.log(comments)
        
         
    }

return (
    <div>

        <h1>comments</h1>
        {comments.map(comment => (
<ul>
    <li>{comment.comment}</li>
</ul>

))}

    <CommentForm addComment={addComment}/>
    </div>
)

}

export default Comment