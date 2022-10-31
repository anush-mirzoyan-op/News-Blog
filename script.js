let video1 = document.getElementById("video1");
let video2 = document.getElementById("video2");
let video3 = document.getElementById("video3");

let i = 1,
  j = 1,
  k = 1;

function playOrPauseVideo1() {
  if (i % 2 === 1) {
    video1.play();
    i++;
  } else if (i % 2 === 0) {
    video1.pause();
    i++;
  }
}

function playOrPauseVideo2() {
  if (j % 2 === 1) {
    video2.play();
    j++;
  } else if (j % 2 === 0) {
    video2.pause();
    j++;
  }
}

function playOrPauseVideo2() {
  if (k % 2 === 1) {
    video3.play();
    k++;
  } else if (k % 2 === 0) {
    video3.pause();
    k++;
  }
}
