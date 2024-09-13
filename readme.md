# Video Playback Control

This project provides a JavaScript function to control video playback on various streaming platforms. It allows users to skip forward or backward in the video using keyboard shortcuts.

## Features

- Supports the following platforms:
  - SunNXT
  - Netflix
  - Amazon Prime Video
  - Hotstar
  - Youtube
- Keyboard shortcuts for video control:
  - `,` to skip backward by 2 seconds
  - `.` to skip forward by 2 seconds

## Usage

1. Include the JavaScript code in your project.
2. The script will automatically detect the platform and bind the keyboard shortcuts to the video element.

## Code

```javascript
function getVideoElement() {
  const url = window.location.href;
  let videoElement = null;

  if (url.includes("sunnxt")) {
    videoElement = document.getElementById("player_html5_api");
  } else if (url.includes("netflix")) {
    // Do nothing for Netflix
    return null;
  } else if (url.includes("primevideo")) {
    const container = document.querySelector(".rendererContainer");
    if (container) {
      videoElement = container.querySelector("video");
    }
  } else if (url.includes("hotstar.com")) {
    videoElement = document.querySelector("video");
  } else {
    videoElement = document.querySelector("video");
  }

  return videoElement;
}

document.addEventListener("keydown", function (event) {
  const video = getVideoElement();
  if (!video) return;

  switch (event.key) {
    case ",":
      video.currentTime -= 2;
      break;
    case ".":
      video.currentTime += 2;
      break;
  }
});
```
