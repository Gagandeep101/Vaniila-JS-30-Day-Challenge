const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
// get webcam access from useer and display a webcom video on top of the the screen

function getVideo(){
  // get onely video from user 
  navigator.mediaDevices.getUserMedia({video: true,audio: false}).then(localMediaStream=>{
    video.srcObject = localMediaStream;
    video.play();
  }).catch(err=>console.log("Please wait... || Check your WebCams settings",err.msg));
}
getVideo();