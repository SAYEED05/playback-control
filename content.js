function getVideoElement() {
  const url = window.location.href;
  let videoElement = null;

  if (url.includes("sunnxt")) {
    videoElement = document.getElementById("player_html5_api");
  } else if (url.includes("netflix")) {
    videoElement = document.querySelector("video");
  } else if (url.includes("primevideo")) {
    const container = document.querySelector(".rendererContainer");
    if (container) {
      videoElement = container.querySelector("video");
    }
  } else if (url.includes("hotstar.com")) {
    // Hotstar
    videoElement = document.querySelector("video");
  } else {
    // Handle more platforms here
    videoElement = document.querySelector("video");
  }

  return videoElement;
}

document.addEventListener("keydown", function (event) {
  const video = getVideoElement();
  if (!video) return;

  switch (event.key) {
    case ",":
      video?.currentTime -= 2;
      break;
    case ".":
      video?.currentTime += 2;
      break;
    case "/":
      video?.currentTime += 2;
      break;
  }
});
