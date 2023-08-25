export class Jot {
    constructor(data) {
        this.name = data.name
        this.color = data.color
        this.mytext = data.mytext
    }

    get JotCardTemplate() {
        return /*html*/ `
        <li class="list-group-item rounded p-2 text-white jot-list-item" style="background-color: ${this.color};" onclick="app.HomeController.setActiveJot('${this.name}')"><div class="d-flex flex-row justify-content-start note-name"><i
                            class="mdi mdi-pencil"></i>
                        ${this.name}</div></li>
        `
    }

    get JotMyText() {
        return `${this.mytext}`
    }

}