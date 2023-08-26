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
    textArea.value = null
  }
  let updateTime = document.getElementById('updated-item')
  if (updateTime.innerHTML === 'undefined') {
    updateTime.innerHTML = 'not yet.'
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
    setInterval((function () {
      if (AppState.activeJot == null) {
        console.log('no active')
      } else {
        let wordCount = document.getElementById('jotTextAreaSpan')
        wordCount.innerHTML = AppState.activeJot.chars
        jotsService.updateWordCount()
      }
    }), 1000)
    document.getElementById('color').value = '#3C5159'
    const noteNameField = document.getElementById('jot-name-input')
    noteNameField.maxLength = 15
    _drawJots()
    _checkActive()
    _checkCreated()
  }

  updateWordCount() {
    let wordCount = document.getElementById('jotTextAreaSpan')
    wordCount.innerHTML = AppState.activeJot.chars
    jotsService.updateWordCount()
  }

  setActiveJot(jotName) {
    jotsService.setActiveJot(jotName)
    console.log(AppState.activeJot)
    let createTime = document.getElementById('created-time')
    createTime.innerHTML = AppState.activeJot.mydate
    let updateTime = document.getElementById('updated-item')
    updateTime.innerHTML = AppState.activeJot.updated
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
    let updateTime = document.getElementById('updated-item')
    updateTime.innerHTML = AppState.activeJot.updated
    jotsService.editJot()
  }

  deleteJot(jotId) {
    if (confirm("Click OK to delete Jot.") == true) {
      jotsService.deleteJot(jotId)
      _drawJots()
      _checkCreated()
      alert('Jot deleted.')
    } else {
      alert('Jot deletion canceled.')
    }
  }

}

// const date = new Date()
// let day = date.getDate()
// let month = date.getMonth() + 1
// let year = date.getFullYear()
// let fullDate = `${month} ${day} ${year}`
// AppState.activeJot.date = fullDate
// console.log(fullDate)