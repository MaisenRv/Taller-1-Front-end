class Comment{
    #user
    #comment
    #date
    constructor(user,comment){
        this.#user = user
        this.#comment = comment
        this.#date = new Date()
    }

    createComment(){

        const userName = document.createElement("h4")
        userName.textContent = this.#user
        const commentContent = document.createElement("p")
        commentContent.textContent = this.#comment
        const date = document.createElement("span")
        date.textContent = this.#formatDate()


        const commentDiv = document.createElement("div")
        commentDiv.classList = "comment"

        commentDiv.appendChild(userName)
        commentDiv.appendChild(commentContent)
        commentDiv.appendChild(date)

        return commentDiv
    }

    #formatDate(){return `${this.#date.getMonth()}/${this.#date.getDay()}/${this.#date.getFullYear()}`}
}