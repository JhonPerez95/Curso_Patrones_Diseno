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

class Observer {
  constructor(fn) {
    this.fn = fn
  }

  refresh(data) {
    this.fn(data)
  }
}
// Creamos subject
const subject = new Subject()

// Creamos observers
const observer1 = new Observer((data) => console.log('observer 1: ', data))
const observer2 = new Observer((data) => {
  root1.innerHTML = 'Observer 2: ' + data
})

// Suscribimos observers
subject.subscribe(observer1)
subject.subscribe(observer2)

// Funcion del html
function onChange() {
  subject.notify(myText.value)
}
