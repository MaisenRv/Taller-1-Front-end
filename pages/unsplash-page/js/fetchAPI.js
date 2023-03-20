const AccessKey = "z1DepeA4sZi8ZX4-yHHV3UEK5R4XUuzn9BpwV4YLFus";
const SettingPhotoSize = "&w=500&dpr=2"

const url = "https://api.unsplash.com/"

const initialQueryAPI = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(`${url}photos/?client_id=${AccessKey}${SettingPhotoSize}`)
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

const searchByText = text =>{
    return new Promise((resolve,reject)=>{
        fetch(`${url}search/photos?client_id=${AccessKey}&query=${text}&per_page=15`)
        .then(response =>{
            if(response.ok){
                resolve(response.json())
            }else{
                reject(new Error ("error"))
            }
        })
        .catch(error => new Error("error"))
    })
}