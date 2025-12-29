import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Video: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "video-container")}>
      <video
        id="sidebar-video"
        src="https://turntrout.com/static/pond.webm"
        loop
        muted
        autoplay
        playsinline
        class="sidebar-video"
      />
      <button class="video-play-pause" aria-label="Play/Pause">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="play-icon"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="pause-icon"
        >
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      </button>
    </div>
  )
}

Video.css = `
.video-container {
  position: relative;
  width: 100%;
  max-width: 200px;
  margin: 0.5rem 0;
}

.sidebar-video {
  width: 100%;
  height: auto;
  border-radius: 4px;
  display: block;
}

.video-play-pause {
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 3px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: background-color 0.2s ease;
}

.video-play-pause:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.video-play-pause svg {
  color: white;
  width: 12px;
  height: 12px;
}

.video-play-pause .pause-icon {
  display: none;
}

.video-play-pause.playing .play-icon {
  display: none;
}

.video-play-pause.playing .pause-icon {
  display: block;
}
`

Video.afterDOMLoaded = `
document.addEventListener("nav", () => {
  const video = document.getElementById("sidebar-video")
  const button = document.querySelector(".video-play-pause")
  
  if (video && button) {
    const togglePlayPause = () => {
      if (video.paused) {
        video.play()
        button.classList.add("playing")
      } else {
        video.pause()
        button.classList.remove("playing")
      }
    }
    
    button.addEventListener("click", togglePlayPause)
    
    // Update button state based on video state
    video.addEventListener("play", () => {
      button.classList.add("playing")
    })
    
    video.addEventListener("pause", () => {
      button.classList.remove("playing")
    })
    
    window.addCleanup(() => {
      button.removeEventListener("click", togglePlayPause)
    })
  }
})
`

export default (() => Video) satisfies QuartzComponentConstructor

