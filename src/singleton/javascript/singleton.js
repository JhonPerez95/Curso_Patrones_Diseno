class Singleton {
  constructor() {
    console.log('entro al constructor')
    if (!Singleton.instance) {
      console.log('No existe la instancia')
      Singleton.instance = this
      return Singleton.instance
    }
    console.log('existe la instancia')
    return Singleton.instance
  }

  get() {
    return this
  }
}

console.log('******** Primera Instancia')
const singleton = new Singleton()

console.log('******** Segunda Instancia')
const singleton2 = new Singleton()
