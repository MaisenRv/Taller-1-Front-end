const commentForm = document.getElementById("comment-form")

commentForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const userName = document.getElementById("user-name")
    const commentContent = document.getElementById("comment")

    if (userName.value != "" && commentContent.value != "") {
        const comment = new Comment(userName.value,commentContent.value);
        addCommentToList(comment.createComment())
    }
})