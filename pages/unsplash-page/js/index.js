const sectionImages = document.getElementById("fetch-api")

const printInformation = (data) =>{
    data.then(result =>{
        for(photoItem of result){
            const {urls} = photoItem
            const {regular} = urls

            const article = document.createElement("article")
            article.classList = "photoItem"
            const img = document.createElement("img")
            img.src = regular
            // img.style.width = "200px"
            // img.style.height = "200px"
            article.appendChild(img)
            sectionImages.appendChild(article)
        }

    })
}


window.addEventListener("load",()=>{
    printInformation(initialQueryAPI())
})




