class SingletonTS {
  private static instance: SingletonTS
  random: number
  
  private constructor() {
    this.random = Math.random()
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new SingletonTS()
    }
    return SingletonTS.instance
  }
}

const singletonTS1 = SingletonTS.getInstance()
const singletonTS2 = SingletonTS.getInstance()
console.log('Number random whit instancie 1:',singletonTS1.random)
console.log('Number random whit instancie 2:', singletonTS2.random)
console.log('Son la misma instancia?', singletonTS1 === singletonTS2 ? 'Si' : 'No');