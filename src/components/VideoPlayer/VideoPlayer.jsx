import { useRef } from "react";

const Player = ({ source }) => {
  const playerRef = useRef(null);

  const onPlay = () => playerRef.current.play();

  const onPause = () => playerRef.current.pause();

  return (
    <div>
      <video width="400" ref={playerRef} src={source} type="video/mp4">
        <source src={source} type="video/mp4" />
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={onPlay}>Play</button>
        <button onClick={onPause}>Pause</button>
      </div>
    </div>
  );
};

const VideoPlayer = () => {
  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
};

export default VideoPlayer;

// import { useState, useRef } from "react";

// export default function VideoPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const ref = useRef(null);

//   function handleClick() {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);

//     if (nextIsPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }

//   return (
//     <>
//       <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
//       <video
//         width="250"
//         ref={ref}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       >
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   );
// }
