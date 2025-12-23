function applyNativeControls() {
  const controlPanel = document.getElementById("player-control-panel");
  if (controlPanel) {
    controlPanel.style.display = "none";
  }

  const video = document.querySelector("video.single");
  if (video && !video.hasAttribute("controls")) {
    video.setAttribute("controls", "");
  }
}

// Apply immediately
applyNativeControls();
