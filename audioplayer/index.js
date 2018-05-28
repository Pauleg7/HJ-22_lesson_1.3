'use strict';

let allMusic = {
'LA Chill Tour' : 'mp3/LA Chill Tour.mp3',
'LA Fusion Jam' : 'mp3/LA Fusion Jam.mp3',
'This is it band' : 'mp3/This is it band.mp3'
};


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

let arrMusicTitle = [], currentTrack = 0;

for (let title in allMusic) {
	arrMusicTitle.push(title);
}

function nextTrack() {
	currentTrack++;

	if (currentTrack >= arrMusicTitle.length) {
		currentTrack = 0;
	}

	audio.src = allMusic[arrMusicTitle[currentTrack]];
	document.getElementsByClassName('title')[0].title = arrMusicTitle[currentTrack];
	audio.play();
	mediaplayer.classList.add('play');
}

function backTrack() {
	currentTrack--;

	if (currentTrack < 0) {
		currentTrack = arrMusicTitle.length - 1;
	}

	audio.src = allMusic[arrMusicTitle[currentTrack]];
	document.getElementsByClassName('title')[0].title = arrMusicTitle[currentTrack];
	audio.play();
	mediaplayer.classList.add('play');
}

btnNext.onclick = nextTrack;
btnBack.onclick = backTrack;