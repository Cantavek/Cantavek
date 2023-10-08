import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import '@videojs/themes/dist/fantasy/index.css';
import { useScreenDetector } from '@/lib/useScreenDetector';
import Player from 'video.js/dist/types/player';

const VideoPlayer = ({ options }: { options: any}) => {
  // const { isMobile } = useScreenDetector()
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current) { 
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoElement.classList.add('vjs-theme-fantasy')
      videoRef?.current?.appendChild(videoElement);
       const { sources, ...rest} = options
      const player = videojs(videoElement, rest);
      playerRef.current = player
      player.src(sources);
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef}/>
    </div>
  )
}

export default VideoPlayer