class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((item) => item !== observer)
  }

  notify(data) {
    this.observers.forEach((observer) => observer.refresh(data))
  }
}

// Creamos subject
class ItemHtmlSubject extends Subject {
  constructor() {
    super()
    this.data = []
  }

  add(data) {
    this.data.push(data)
    this.notify(this.data)
  }
}

// Creamos observers
class HtmlItemObserver {
  constructor(elementHtml) {
    this.elementHtml = elementHtml
  }

  refresh(data) {
    this.elementHtml.innerHTML = data.reduce((acc, element) => {
      return (
        acc +
        ` <p>${element}</p>
      `
      )
    }, '')
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn
  }

  refresh(data) {
    this.fn(data)
  }
}

// Creamos Subject
const items = new ItemHtmlSubject()

// Creamos observers
const itemHtmlObserver1 = new HtmlItemObserver(div1)
const itemHtmlObserver2 = new HtmlItemObserver(div2)
const itemHtmlObserver3 = new Observer((data) => {
  div3.innerHTML = data.length
})
// suscribimos observers
items.subscribe(itemHtmlObserver1)
items.subscribe(itemHtmlObserver2)
items.subscribe(itemHtmlObserver3)

// Funcion del html
function onClick() {
  const data = nameInput.value
  items.add(data)
}
