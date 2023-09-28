import { Player, Video, DefaultUi } from '@vime/react';
import '@vime/core/themes/default.css';

const VideoPlayer = () => {
  return (
    <Player
    theme="dark"
    style={{ '--vm-player-theme': '#e86c8b' }}
  >
    <Video
      crossOrigin={'anonymous'}
      poster="https://media.vimejs.com/poster.png"
    >
      <source 
        data-src="https://media.vimejs.com/720p.mp4" 
        type="video/mp4"
      />
      <track 
        default 
        kind="subtitles" 
        src="https://media.vimejs.com/subs/english.vtt" 
        srcLang="en" 
        label="English" 
      />
    </Video>

    <DefaultUi />
  </Player>
  )
}

export default VideoPlayer