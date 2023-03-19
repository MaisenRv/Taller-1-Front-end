const divSearchBar = document.getElementById("div-search-bar")
const searchBar = document.getElementById("search")

searchBar.addEventListener("focus",()=>{
    divSearchBar.classList.add("searching-focus")
})

searchBar.addEventListener("blur",()=>{
    divSearchBar.classList.remove("searching-focus")
})