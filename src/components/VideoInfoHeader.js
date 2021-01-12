import React, {useState} from 'react'

function VideoInfoHeader(props) {
    const {title, views, createdAt, upvotes, downvotes} = props.videoInfo
    const [upVotes, setUpVotes] = useState(upvotes)
    const [downVotes, setDownVotes] = useState(downvotes)

    // Tried to put it in one function and id didn't work
    // function handleVotes(voteUpDown) {
    //     voteUpDown === "upvote" ? setUpVotes(upVotes => upVotes++) : setDownVotes(downVotes => downVotes--)
    // }
    
    function handleUpVotes() {
        setUpVotes((upVotes) => upVotes + 1)
    }

    function handleDownVotes() {
        setDownVotes((downVotes) => downVotes + 1)
    }

    return (
        <div>   
            <h1>{title}</h1>
            <p>{views} views | {createdAt}</p>
            <button onClick={handleUpVotes}>{upVotes} 👍</button>
            <button onClick={handleDownVotes}>{downVotes} 👎</button>
        </div>
    )
}

export default VideoInfoHeader