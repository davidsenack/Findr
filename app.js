// ON SEARCH BUTTON CLICK 

// document.querySelectorAll
// function newSearch(str, find, replace) {
//     return str.replace(find, replace);
// }

function generateSearchResult() {
  let search = document.getElementById("search-bar").value;
  document.replaceAll("nature", search)
  console.log(search);
}
