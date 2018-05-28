'use strict';

const activeAudio = document.getElementsByTagName('li');

for (let i=0; i < activeAudio.length; i++) {
    activeAudio[i].onclick = function() {
    	this.getElementsByTagName('audio')[0].play();
    }
}