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
function paintVideoToCanvas(){
  // fetch video width and height
  const width = video.videoWidth;
  const height = video.videoHeight;
  // set canvas width and height
  canvas.width = width;
  canvas.height = height;
  // setInterval for repeatly updating photo on canvas less than 1 sec
  setInterval(()=>{
    // display video on canvas 
    ctx.drawImage(video,0,0,width,height);
    let pixel= ctx.getImageData(0,0,width,height);
    
    // Add Efftect on video
    
    // pixel=redeffects(pixel);
    // pixel=rgbsplit(pixel);
    pixel=greenScreen(pixel);
    ctx.putImageData(pixel,0,0);  
  },16);
}

getVideo();
video.addEventListener('canplay',paintVideoToCanvas);