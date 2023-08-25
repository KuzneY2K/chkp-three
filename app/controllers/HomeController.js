import { AppState } from "../AppState.js"
import { getFormData } from "../utils/FormHandler.js"
import { jotsService } from "../services/JotsService.js"
import { Jot } from "../models/Jot.js"


function _drawJots() {
  let jots = AppState.jots
  let template = ''
  jots.forEach(jot => template += jot.JotCardTemplate)
  let jotList = document.querySelector('.jot-list')
  jotList.innerHTML = template
  const jotCounter = document.getElementById('jot-counter')
  jotCounter.innerHTML = AppState.jots.length

}

function _checkActive() {
  if (AppState.activeJot == null) {
    document.getElementById('jotTextArea').disabled = true
  } else {
    document.getElementById('jotTextArea').disabled = false
  }
}

// Public
export class HomeController {
  constructor() {
    const noteNameField = document.getElementById('jot-name-input')
    noteNameField.maxLength = 15
    _drawJots()
    _checkActive()
  }

  setActiveJot(jotName) {
    jotsService.setActiveJot(jotName)
    console.log(AppState.activeJot)
    _checkActive()
  }

  createJot() {
    window.event.preventDefault()
    const form = window.event.target
    const formData = getFormData(form)
    jotsService.createJot(formData)
    _drawJots()
  }

  editJot() {
    window.event.preventDefault()
    jotsService.editJot()
  }



}