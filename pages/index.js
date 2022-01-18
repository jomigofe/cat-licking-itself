import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url="/signal-2022-01-18-171220_001.mp4"
        muted={true}
        className="react-player"
        playing={true}
        playsinline={true}
        loop={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}
