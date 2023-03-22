const commentForm = document.getElementById("comment-form")
let idNumberComment = 0

commentForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const userName = document.getElementById("user-name")
    const commentContent = document.getElementById("comment")

    if (userName.value != "" && commentContent.value != "") {
        const comment = new Comment(userName.value,commentContent.value,idNumberComment);
        // localStorage.setItem("comment",comment.createComment())
        addCommentToList(comment.createComment())
        
        idNumberComment++
    }
})