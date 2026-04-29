"use client";

import PlayArrow from "@mui/icons-material/PlayArrow";
import PauseButton from "@mui/icons-material/Pause";
import { useRef, useState } from "react";

export default function PlayPauseAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);

  const scrollToTop = () => {
    if (isPlaying) {
      ref.current?.pause();
    } else {
      ref.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      aria-label="Play/Pause"
      onClick={scrollToTop}
      style={{ position: "fixed" }}
      className="
        fixed z-50 rounded-full border-0 bg-ink-soft p-1
        text-white shadow-none hover:bg-green hover:opacity-90
        bottom-4 right-4"
    >
      <audio src={"/so_this_is_love.mp3"} muted={false} ref={ref}></audio>
      {!isPlaying && <PlayArrow fontSize="large" color="info" />}
      {isPlaying && <PauseButton fontSize="large" color="info" />}
    </div>
  );
}
