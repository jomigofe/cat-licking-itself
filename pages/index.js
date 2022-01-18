import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        placeItems: "center",
      }}
    >
      <ReactPlayer
        url="/signal-2022-01-18-171220_001.mp4"
        muted={true}
        // controls={true}
        playing={true}
        // autoplay={true}
        loop={true}
        // width="100%"
        // height="100%"
      />
    </div>
  );
}
