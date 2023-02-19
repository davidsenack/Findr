// Search update functionallity
var prevSearchTerm = "nature";

function rep() {
  let newSearchTerm = document.getElementById("search-bar").value;
  document.body.innerHTML
      = document.body.innerHTML
      .replaceAll(prevSearchTerm, newSearchTerm);
  prevSearchTerm = newSearchTerm;
}

// View more button functionality


