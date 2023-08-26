import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Jot } from "./models/Jot.js"

class ObservableAppState extends EventEmitter {
  page = ''


  jots = loadState('jots', [Jot])

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  activeJot = null

  // NOTE Used to load initial data
  init() {

  }

  // moved to loadState, its all good meow

  // jots = [
  //   new Jot
  //     ({
  //       name: 'My first Jot',
  //       color: '#333',
  //       mytext: 'This is my very first Jot. I am so excited for death by powerpoint.'
  //     }),
  //   new Jot
  //     ({
  //       name: 'Select colors?',
  //       color: '#627777',
  //       mytext: 'Yoooooo I can selecta da colar if I click on the color picker?? 🤯'
  //     })
  // ]

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
