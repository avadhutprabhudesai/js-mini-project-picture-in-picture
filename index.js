import './style.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

var videoPlayer = document.getElementById('video');
var button = document.getElementById('button');

async function promptShare() {
  const mediaStream = await navigator.mediaDevices.getDisplayMedia();

  videoPlayer.srcObject = mediaStream;

  videoPlayer.onloadeddata = () => {
    videoPlayer.play();
  };
}

button.addEventListener('click', async () => {
  button.disabled = true;

  await videoPlayer.requestPictureInPicture();

  button.disabled = false;
});

promptShare();
