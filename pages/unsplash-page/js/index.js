const sectionImages = document.getElementById("fetch-api")

const clearSectionImages = ()=>{
    while (sectionImages.hasChildNodes()) {
        sectionImages.removeChild(sectionImages.lastChild)
    }
}

const notFoundPhotosMessage = ()=>{
    const message = document.createElement("div")
    message.appendChild(document.createTextNode("No se encontraron fotos"))
    sectionImages.appendChild(message)
}

const printInformation = (data) =>{
        data.then(result=>{
            if (result.length != 0) {
                for(photoItem of result){
                    // console.log(photoItem);
                    const {urls, user, created_at,likes, alt_description} = photoItem
                    const {regular} = urls
        
                    // Create photo element
                    const article = document.createElement("article")
                    article.classList = "photoItem"
                    const img = document.createElement("img")
                    img.src = regular
        
                    // photo Information
                    const infoPhotoItem = document.createElement("div")
                    infoPhotoItem.classList = "photoItem-info"
        
                    const userName = document.createElement("h3")
                    userName.textContent = user.name
        
                    const createdDate = document.createElement("span")
                    createdDate.textContent = `Publicado el ${created_at.substring(0,10)}`
        
                    const description = document.createElement("p")
                    description.textContent = alt_description
        
                    // Likes------------------------------
                    const photoLikes = document.createElement("span")
                    const numberLikes = document.createTextNode(likes)
                    const likeSVG = document.createElement('img')
                    likeSVG.src = "../../../images/thumb-up.svg"
                    likeSVG.classList = "img-like"
                    photoLikes.appendChild(likeSVG)
                    photoLikes.appendChild(numberLikes)
                    // ----------------------------------
        
                    infoPhotoItem.appendChild(userName)
                    infoPhotoItem.appendChild(description)
                    infoPhotoItem.appendChild(photoLikes)
                    infoPhotoItem.appendChild(createdDate)
        
                    article.appendChild(img)
                    article.appendChild(infoPhotoItem)
                    sectionImages.appendChild(article)
                }
            }else{
                notFoundPhotosMessage()
            }
        })

}







