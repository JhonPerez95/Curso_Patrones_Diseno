import { IStrategy } from './interfaces';


class loginContext {
  constructor(private strategy: IStrategy) {
    this.setStrategy(strategy)
  }

  setStrategy(strategy: IStrategy) {
    this.strategy = strategy
  }

  getStrategy() {
    return this.strategy
  }

  login(user: string, password: string) {
    return this.strategy.login(user, password)
  }
}

class loginFacebook implements IStrategy {
  login(user: string, password: string) {
    console.log('login with facebook')
    if (user === 'facebook' && password === '123') {
      return true
    }
    return false
  }
}

class loginGoogle implements IStrategy {
  login(user: string, password: string) {
    console.log('login with google')
    if (user === 'google' && password === '123') {
      return true
    }
    return false
  }
}

// Creamos una instancia de loginContext
const login = new loginContext(new loginFacebook())
login.login('facebook', '123')

// Cambiamos la estrategia de login
login.setStrategy(new loginGoogle())
login.login('google', '123')
