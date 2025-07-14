function handleSearch() {
  const query = document.getElementById("searchBar").value.trim();

  if (query === "") {
    alert("Please enter a book name.");
    return;
  }
  const annaUrl = `https://annas-archive.org/search?q=${encodeURIComponent(
    query
  )}`;
  const oceanUrl = `https://oceanofpdf.com/?s=${encodeURIComponent(
    query
  )}`;

  window.open(oceanUrl, "_blank"),
  window.open(annaUrl, "_blank");
}
document.getElementById("searchButton").addEventListener("click", handleSearch);
document.getElementById("searchBar").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
