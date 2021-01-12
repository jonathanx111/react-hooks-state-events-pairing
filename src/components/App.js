import video from "../data/video.js";
import Comments from "./Comments.js";
import VideoInfoHeader from "./VideoInfoHeader.js";

function App() {
  console.log("Here's your data:", video);
  const {comments,  ...videoInfoHeaderProps} = video
  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoInfoHeader videoInfo={videoInfoHeaderProps} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
