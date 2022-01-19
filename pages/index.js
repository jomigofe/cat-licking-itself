import ReactPlayer from "react-player";
import { useEffect, useRef } from "react";
import useMouse from "@react-hook/mouse-position";

const imageList = [
  "/images/signal-2022-01-18-205223_001.jpeg",
  "/images/signal-2022-01-18-205223_003.jpeg",
  "/images/signal-2022-01-18-205223_004.jpeg",
  "/images/signal-2022-01-18-205223_005.jpeg",
  "/images/signal-2022-01-18-205223_006.jpeg",
  "/images/signal-2022-01-18-205223_007.jpeg",
  "/images/signal-2022-01-18-205223_008.jpeg",
  "/images/signal-2022-01-18-205223_009.jpeg",
];

//function that returns a random number between 0 and the length of the imageList array
function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default function Home() {
  const ref = useRef(null);

  const mouse = useMouse(ref);

  useEffect(() => {
    console.log(mouse);
  }, [mouse]);

  return (
    <div ref={ref} className="player-wrapper">
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
      <div
        className="image-wrapper"
        style={{
          top: `${mouse.y}px`,
          left: `${mouse.x}px`,
          "--background-image": `url(${
            imageList[randomNumber(imageList.length)]
          })`,
        }}
      ></div>
      <a href="https://github.com/jomigofe/cat-licking-itself" target="_blank">
        <img
          className="githubholder"
          src="https://socialify.git.ci/jomigofe/cat-licking-itself/image?font=Rokkitt&language=1&owner=1&pattern=Solid&stargazers=1&theme=Dark"
          alt="cat-licking-itself"
          width="640"
          height="320"
        />
      </a>
    </div>
  );
}
