import { Jot } from "../models/Jot.js";
import { HomeController } from "../controllers/HomeController.js";
import { AppState } from "../AppState.js";
import { saveState } from "../utils/Store.js";

function _saveJots() {
    saveState('jots', AppState.jots)
}

class JotsService {

    setActiveJot(jotName) {
        let foundJot = AppState.jots.find(jot => jot.name == jotName)
        AppState.activeJot = foundJot
        let jotTextArea = document.getElementById('jotTextArea')
        jotTextArea.innerHTML = foundJot.mytext
        const jotBg = document.getElementsByClassName('jot-bg')[0]
        jotBg.style.background = foundJot.color
        document.getElementById('jotTextArea').value = AppState.activeJot.mytext
        _saveJots()
    }

    createJot(formData) {
        let newJot = new Jot(formData)
        AppState.jots.push(newJot)
        _saveJots()
    }

    editJot() {
        AppState.activeJot.mytext = document.getElementById('jotTextArea').value
        _saveJots()
    }

    deleteJot(jotId) {
        let foundJots = AppState.jots.find(jot => jot.id == jotId)
        let filteredJots = AppState.jots.filter(jot => jot.id != jotId)
        AppState.jots = filteredJots
        _saveJots()
    }

}

export const jotsService = new JotsService()