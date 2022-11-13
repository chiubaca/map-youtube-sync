"use client";

import React from "react";
import ReactPlayer from "react-player";

import type { OnProgressProps } from "react-player/types/base";

export interface VideoState {
  url: string;
  pip: boolean;
  playing: boolean;
  controls: boolean;
  light: boolean;
  volume: number;
  muted: boolean;
  played: number;
  loaded: number;
  duration: number;
  playbackRate: number;
  loop: boolean;
  seeking: boolean;
}

interface VideoPlayerProps {
  videoState: VideoState;
  setVideoState: React.Dispatch<React.SetStateAction<VideoState>>;
}

export default function VideoPlayer({
  videoState,
  setVideoState,
}: VideoPlayerProps) {
  const player = React.useRef<ReactPlayer>(null!);

  const handleSeekMouseDown = () => {
    setVideoState({ ...videoState, seeking: true });
  };

  const handleSeekChange = (e: any) => {
    setVideoState({ ...videoState, played: parseFloat(e.target.value) });
  };

  const handleSeekMouseUp = (e: any) => {
    setVideoState({ ...videoState, seeking: false });
    player.current.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = (state: OnProgressProps) => {
    // We only want to update time slider if we are not currently seeking
    if (!videoState.seeking) {
      setVideoState({ ...videoState, ...state });
      return;
    }
    return;
  };

  const [hasWindow, setHasWindow] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (!hasWindow) {
    return null;
  }

  return (
    <div>
      <ReactPlayer
        ref={player}
        url={videoState.url}
        onProgress={handleProgress}
      />
      <input
        className="range range-lg"
        type="range"
        min={0}
        max={0.999999}
        step="any"
        value={videoState.played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
      />

      <div className="  max-w-md break-all"> {JSON.stringify(videoState)}</div>
    </div>
  );
}
