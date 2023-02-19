// GLOBAL VARIABLES
var currentSearchStr = ["nature"];


// FUNCTIONS

// Function to run on page load and new search
// Removes all children of image grid container and initializes new image grid
function pageInit() {
  removeChildren(document.getElementById("image-grid-container"));
  viewMore();
};

// Function to get results for new search
// Clears image grid and runs pageInit function with new 
function newSearch() {
  let originalSearchString = document.getElementById("search-bar").value;
  currentSearchStr = originalSearchString.split(" ").join("+");
  pageInit();
};

// Function to run on view more button click
// Creates 36 new images and appends them to the image grid container
function viewMore() {
  for (let i = 0; i < 36; i++) {
    let imgNum = Math.floor(Math.random() * 10000);
    let newImg = document.createElement("img");

    newImg.src = "https://source.unsplash.com/random/1080x1080/?" + currentSearchStr + "/" + imgNum;
    newImg.className = "grid-img";
    newImg.alt = "unsplash image";
    document.getElementById("image-grid-container").appendChild(newImg);
  };
};

// Function to remove all children of a parent element
function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};

// EVENT LISTENERS

// Run pageInit function on page load
window.onload = pageInit();

// Listen for 'view more' button click
document.getElementById("view-more-btn").onclick = function() {viewMore()};
