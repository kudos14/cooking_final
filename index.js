const surpriselist = ["bananabread", "pumpkincheesecake", "pennevodka"];

function getRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const surprise = getRandom(surpriselist);




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("scrollButt").style.display = "block";
  } else {
    document.getElementById("scrollButt").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}