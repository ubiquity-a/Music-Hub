
//initialize the variable
let songIndex = 0;
//let i;
let audioElement = new Audio('m.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
//let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "I don't Wanna talk", filePath: "spotify\m.mp3", coverPath: "back pic.jpg"},
    {songName: " Scars To Your beautiful", filePath: "spotify\1.mp3", coverPath: "back pic.jpg"},
    {songName: "Wasting My Emotion", filePath: "spotify\2.mp3", coverPath: "back pic.jpg"},
    {songName: "Ankhein Teri Kitni Hasi ", filePath: "spotify\3.mp3", coverPath: "back pic.jpg"},
    {songName: "Kash Aisa Hota ", filePath: "spotify\4.mp3", coverPath: "back pic.jpg"},
    {songName: " Do You Know", filePath: "spotify\5.mp3", coverPath: "back pic.jpg"},
    {songName: "Pretty Girl ", filePath: "spotify\6.mp3", coverPath: "back pic.jpg"},
    {songName: "OK Not To Be OK", filePath: "spotify\7.mp3", coverPath: "back pic.jpg"},
    {songName: "Braat", filePath: "spotify\8.mp3", coverPath: "back pic.jpg"}

]

//songItems.forEach((element, i)=> {
  //  console.log(element, i);
    //element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    //element.getElementsByClassName('songName')[0].innertext = songs[i].songName;
//});

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to event

  audioElement.addEventListener('timeupdate', ()=>{

  //update time on playing music
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  console.log(progress);
  
  myProgressBar.value = progress;
  })
  myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

  })

  const makeAllPlays = ()=>{
    e.target.classlist.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-pause-circle');
    element.classList.add('fa-play-circle');

    })
  }
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            console.log(e.target);
            e.target.classlist.remove('fa-play-circle');
            e.target.classlist.add('fa-pause-circle');
            audioElement.src = m.mp3;
            audioElement.play();
            audioElement.currentTime = 0;
        })

   })


