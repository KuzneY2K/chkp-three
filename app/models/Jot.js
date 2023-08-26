import { generateId } from "../utils/generateId.js"

export class Jot {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.color = data.color
        this.mytext = data.mytext
        this.chars = data.chars
        this.mydate = data.mydate
        this.updated = data.updated
    }

    get JotCardTemplate() {
        return /*html*/ `<li class="list-group-item rounded p-2 text-white jot-list-item" style="background-color: ${this.color};" onclick="app.HomeController.setActiveJot('${this.name}')"><div class="d-flex flex-row justify-content-start note-name fs-4">${this.name}</li><button class="btn btn-danger me-3 w-100" onclick="app.HomeController.deleteJot('${this.id}')">DELETE</button>
        `
    }

    get JotMyText() {
        return `${this.mytext}`
    }

}