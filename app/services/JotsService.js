import { Jot } from "../models/Jot.js";
import { HomeController } from "../controllers/HomeController.js";
import { AppState } from "../AppState.js";

class JotsService {

    setActiveJot(jotName) {
        let foundJot = AppState.jots.find(jot => jot.name == jotName)
        AppState.activeJot = foundJot
        let jotTextArea = document.getElementById('jotTextArea')
        jotTextArea.innerHTML = foundJot.mytext
        const jotBg = document.getElementsByClassName('jot-bg')[0]
        jotBg.style.background = foundJot.color
        document.getElementById('jotTextArea').value = AppState.activeJot.mytext
    }

    createJot(formData) {
        let newJot = new Jot(formData)
        AppState.jots.push(newJot)
    }

    editJot() {
        AppState.activeJot.mytext = document.getElementById('jotTextArea').value
    }

}

export const jotsService = new JotsService()