import { AppState } from "../AppState.js"
import { getFormData } from "../utils/FormHandler.js"
import { jotsService } from "../services/JotsService.js"
import { Jot } from "../models/Jot.js"


function _drawJots() {
  let template = ''
  AppState.jots.forEach(jot => template += jot.JotCardTemplate)
  let jotList = document.querySelector('.jot-list')
  jotList.innerHTML = template
  const jotCounter = document.getElementById('jot-counter')
  jotCounter.innerHTML = AppState.jots.length

}

function _checkActive() {
  let textArea = document.getElementById('jotTextArea')
  if (AppState.activeJot == null) {
    textArea.disabled = true
  } else {
    textArea.disabled = false
  }
  if (textArea.innerHTML === 'undefined') {
    textArea.value = ' '
  }
}

function _checkCreated() {
  let myJotsBtn = document.getElementById('myjots-btn')
  if (AppState.jots.length == 0) {
    myJotsBtn.innerText = 'CREATE JOT'
  } else {
    myJotsBtn.innerText = "MY JOTS"
  }
}

// Public
export class HomeController {
  constructor() {
    document.getElementById('color').value = '#008F8C'
    const noteNameField = document.getElementById('jot-name-input')
    noteNameField.maxLength = 15
    _drawJots()
    _checkActive()
    _checkCreated()
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
    _checkCreated()
  }

  editJot() {
    window.event.preventDefault()
    jotsService.editJot()
  }

  deleteJot(jotId) {
    jotsService.deleteJot(jotId)
    _drawJots()
    _checkCreated()
  }


}