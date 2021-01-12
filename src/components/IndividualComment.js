import React, {useState} from 'react'

function IndividualComment(props) {
    console.log(props)
    const [upVotes, setUpVotes] = useState(props.commentInfo.upvotes)
    const [downVotes, setDownVotes] = useState(props.commentInfo.downvotes)


    function handleUpVotes() {
        setUpVotes((upVotes) => upVotes + 1)
    }

    function handleDownVotes() {
        setDownVotes((downVotes) => downVotes + 1)
    }

    // function handleDeleteButton() {

    // }
    
    return (
        <div>
            <h3>{props.commentInfo.user}</h3>
            <p>{props.commentInfo.comment}</p>

            <button onClick={handleUpVotes}>{upVotes} 👍</button>
            <button onClick={handleDownVotes}>{downVotes} 👎</button>

            <button onClick={props.handleDeleteButton}>Remove</button>
        </div>
    )
}

export default IndividualComment