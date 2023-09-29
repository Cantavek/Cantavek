import { Player, Video, DefaultUi, Skeleton, ViewType } from '@vime/react';
import '@vime/core/themes/default.css';
import { useScreenDetector } from '@/lib/useScreenDetector';

const VideoPlayer = () => {
  const { isMobile } = useScreenDetector()

  return (
    <Player theme="dark" viewType={ViewType.Video} aspectRatio={isMobile ? '16:15' : '16:9'}>
      <Video
        crossOrigin={''}
        poster="/kal-visuals-V1b1YDaesD4-unsplash.jpg"
      >
        <source 
          data-src="/video.mp4" 
          type="video/mp4"
        />
      </Video>

      <DefaultUi noCaptions>
        <Skeleton />
      </DefaultUi>   
    </Player>
  )
}

export default VideoPlayer