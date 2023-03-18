const AccessKey = "z1DepeA4sZi8ZX4-yHHV3UEK5R4XUuzn9BpwV4YLFus";
const SettingPhotoSize = "&w=500&dpr=2"

const initialQueryAPI = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(`https://api.unsplash.com/photos/?client_id=${AccessKey}${SettingPhotoSize}`)
        .then(response =>{
            if (response.ok) {
                resolve(response.json())
            }else{
                reject(new Error("error"))
            }
        })
        .catch(error => new Error("error"))
    })
}

// pruebaAPI().then(data =>{
//     for(photoItem of data){
//         const {urls} = photoItem
//         const {regular} = urls
//         const img = document.createElement("img")
//         img.src = regular
//         img.style.width = "200px"
//         img.style.height = "200px"


//         sectionImages.appendChild(img)
//     }
// })