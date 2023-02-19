// Set global variable for search term
var prevSearchTerm = "nature";

// Function to run on page load and new search
function pageInit() {
  // Do something.
}

// Function to run get results for new search
function newSearch() {
  let newSearchTerm = document.getElementById("search-bar").value;
  document.body.innerHTML
      = document.body.innerHTML
      .replaceAll(prevSearchTerm, newSearchTerm);
  prevSearchTerm = newSearchTerm;
}

// Function to run on view more button click
function viewMore() {
  for (let i = 0; i < 36; i++) {
    let imgNum = Math.floor(Math.random() * 1000);
    let newImg = document.createElement("img");
    newImg.src = "https://source.unsplash.com/random/1080x1080/?" + prevSearchTerm + "/" + imgNum;
    newImg.className = "grid-img";
    newImg.alt = "unsplash image";
    document.getElementById("image-grid-container").appendChild(newImg);
  }
}

// Event listener on click of search button
document.getElementById("view-more-btn").onclick = viewMore();
