import React, {useState} from 'react'
import IndividualComment from './IndividualComment'

function Comments(props) {
    const [searchComments, setSearchComments] = useState("")

    const filteredComments = props.comments.filter(comment => {
        return comment.user.includes(searchComments)
    })

    function handleDeleteButton() {
        
    }
        
    const commentsList = filteredComments.map(comment => {
        return (
            <IndividualComment commentInfo={comment} key={comment.id} handleDeleteButton={handleDeleteButton}/>
        )   
    })

    return (
        <div>
            <input
            type="text"
            placeholder="Search Comments"
            // onChange={handleSearchChange}
            onChange={(e) => setSearchComments(e.target.value)}
            ></input>
            <h2>{props.comments.length} Comments</h2>
            {commentsList}
        </div>
    )
}

export default Comments