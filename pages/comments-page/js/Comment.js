class Comment{
    #user
    #comment
    #date
    #id
    constructor(user,comment,id){
        this.#user = user
        this.#comment = comment
        this.#date = new Date()
        this.#id = id
    }


    createComment(){

        const userName = document.createElement("h4")
        userName.textContent = this.#user

        const commentContent = document.createElement("p")
        commentContent.textContent = this.#comment

        const date = document.createElement("span")
        date.textContent = this.#formatDate()
        
        const commentFooterDiv = document.createElement("div")
        commentFooterDiv.classList = "comment-footer"
        commentFooterDiv.append(this.#createButtons(),date)


        const commentDiv = document.createElement("div")
        commentDiv.classList = "comment"
        commentDiv.id = this.#id
        commentDiv.append(userName,commentContent,commentFooterDiv)

        return commentDiv
    }

    #deleteComment(id){
        commentList.removeChild(document.getElementById(id))
    }

    #editComment(id){

    }

    #createButtons(){
        const buttonDelete = document.createElement("button")
        buttonDelete.classList = "btn-delete"
        buttonDelete.id = "buttonDelete"
        buttonDelete.textContent = "Eliminar"
        buttonDelete.addEventListener("click",()=>{this.#deleteComment(this.#id)})

        const buttonEdit = document.createElement("button")
        buttonEdit.classList = "btn-edit"
        buttonEdit.id = "buttonEdit"
        buttonEdit.textContent = "Editar"
        buttonEdit.addEventListener("click",()=>{this.#editComment(this.#id)})

        const actionsButtonsDiv = document.createElement("div")
        actionsButtonsDiv.classList = "actions-btns"
        actionsButtonsDiv.append(buttonDelete,buttonEdit)

        return actionsButtonsDiv
    }

    #formatDate(){return `${this.#date.getMonth()}/${this.#date.getDay()}/${this.#date.getFullYear()}`}
}