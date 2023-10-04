interface IObserver<T> {
  refresh(value: T): void
}

interface ISubject<T> {
  observers: IObserver<T>[]

  subscribe(observer: IObserver<T>): void
  unsubscribe(observer: IObserver<T>): void
  notify(value: T): void
}

class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[]

  constructor() {
    this.observers = []
  }
  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer)
  }
  unsubscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer)
  }
  notify(value: T): void {
    this.observers.forEach((observer) => observer.refresh(value))
  }
}

class Observer<T> implements IObserver<T> {
  private fn: (value: T) => void

  constructor(fn: (value: T) => void) {
    this.fn = fn
  }

  refresh(value: T): void {
    this.fn(value)
  }
}
// creamos el subject
const subjectNumber = new Subject<number>()
const subjectString = new Subject<string>()

// creamos los observers
const observer1 = new Observer<number>((data) => {
  console.log('Observer 1: ', data)
})
const observer2 = new Observer<number>((data) => {
  console.log('Observer 2: ', data)
})
const observerString1 = new Observer<string>((data) => {
  console.log(data.split('').reverse().join(''))
})
const observerString2 = new Observer<string>((data) => {
  console.log(data.toUpperCase())
})
// Me subscribo al subject
subjectNumber.subscribe(observer1)
subjectNumber.subscribe(observer2)
subjectString.subscribe(observerString1)
subjectString.subscribe(observerString2)

// Notifico al subject
subjectNumber.notify(1)
subjectString.notify('Hola soy un string')
