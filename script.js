const videoElement = document.getElementById('video');
const button = document.getElementById('button');

button.addEventListener('click', selectMediaStream)

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play(); 
    }
  } catch(error) {
    // Catch Error Here
    console.log('whoooops, error here: ', error);
  }
}

// On Load 
selectMediaStream();