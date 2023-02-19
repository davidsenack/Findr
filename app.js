// GLOBAL VARIABLES
let currentSearchStr = ['nature'];

// FUNCTIONS

// Function to remove all children of a parent element
function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Function to run on view more button click
// Creates 36 new images and appends them to the image grid container
function viewMore() {
  for (let i = 0; i < 72; i += 1) {
    const imgNum = Math.floor(Math.random() * 10000);
    const newImg = document.createElement('img');

    newImg.src = `https://source.unsplash.com/random/1080x1080/?${currentSearchStr}/${imgNum}`;
    newImg.className = 'grid-img';
    newImg.alt = 'unsplash image';
    document.getElementById('image-grid-container').appendChild(newImg);
  }
}

// Function to run on page load and new search
// Removes all children of image grid container and initializes new image grid
function pageInit() {
  removeChildren(document.getElementById('image-grid-container'));
  viewMore();
}

// Function to get results for new search
// Clears image grid and runs pageInit function with new
// eslint-disable-next-line no-unused-vars
function newSearch() {
  const originalSearchString = document.getElementById('search-bar').value;
  currentSearchStr = originalSearchString.split(' ').join('+');
  pageInit();
}

// Functions to shrink header on scroll
function smallHeader() {
  document.querySelector('header').style.height = '0px';
  document.getElementById('header-logo').style.height = '35px';
  document.querySelector('header').style.backgroundColor = 'rgba(14, 103, 180, 0.8)';
}

function largeHeader() {
  document.querySelector('header').style.height = '70px';
  document.getElementById('header-logo').style.height = '50px';
  document.querySelector('header').style.backgroundColor = '#0E67B4';
}

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    smallHeader();
  } else {
    largeHeader();
  }
}

// EVENT LISTENERS

// Run pageInit function on page load
window.onload = pageInit();

// Listen for 'view more' button click
document.getElementById('view-more-btn').onclick = function viewMoreEvent() { viewMore(); };

// Listen for scroll event
window.onscroll = function scrollEvent() { scrollFunction(); };
