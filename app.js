// Set global variable for search term
var prevSearchTerm = "nature";

// Function to run on page load and new search
function pageInit() {
  removeChildren(document.getElementById("image-grid-container"));
  viewMore();
};

// Function to run get results for new search
function newSearch() {
  let newSearchTerm = document.getElementById("search-bar").value;
  prevSearchTerm = newSearchTerm;
  pageInit();
};

// Function to run on view more button click
function viewMore() {
  for (let i = 0; i < 36; i++) {
    let imgNum = Math.floor(Math.random() * 1000);
    let newImg = document.createElement("img");
    newImg.src = "https://source.unsplash.com/random/1080x1080/?" + prevSearchTerm + "/" + imgNum;
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

// Run pageInit function on page load
window.onload = pageInit();
document.getElementById("view-more-btn").onclick = function() {viewMore()};
