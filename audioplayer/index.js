'use strict';

const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
const playstate = document.getElementsByClassName('playstate')[0];
const audio = mediaplayer.getElementsByTagName('audio')[0];
const btnStop = document.getElementsByClassName('stop')[0];
const btnBack = document.getElementsByClassName('back')[0];
const btnNext = document.getElementsByClassName('next')[0];


playstate.onclick = function() {
  if (audio.paused) {
  	audio.play();
  } else {
    audio.pause();
  }
  mediaplayer.classList.toggle('play');
}

btnStop.onclick = function() {
	audio.pause();
	audio.currentTime = 0;
	mediaplayer.classList.remove('play');
}