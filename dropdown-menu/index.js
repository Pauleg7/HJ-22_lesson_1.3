'use strict';

const wrapperDropdown = document.getElementsByClassName('wrapper-dropdown');

wrapperDropdown[0].onclick = function() {
  this.classList.toggle('active');
};
