const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream (will be passed to video element to be played)
const selectMediaStream = async () => {
  try {
    // screen capture api: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
    const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // directly from docs above
    videoElement.srcObject = mediaStream;
    // onloadedmetadeata is true once it has finished loaded 
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log(`Whoops, you had a ${error} error`);
  }
}

// Get control of the video functionality:
button.addEventListener("click", async () => {
  button.disabled = true;
  // start pic-in-pic
  await videoElement.requestPictureInPicture();
  // reset button: (not sure why?)
  button.disable = false;
})

// onLoad Function
selectMediaStream();