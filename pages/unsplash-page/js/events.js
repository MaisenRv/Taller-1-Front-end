
window.addEventListener("load",()=>{
    printInformation(initialQueryAPI().then(result=>result))
})

window.addEventListener("keypress",(e)=>{
    if (e.key == "Enter" && searchBar.value != "") {
        clearSectionImages()
        printInformation(searchByText(searchBar.value).then(result=>result.results))
    }
})
