import { IStrategy } from './interfaces'

export class loginFacebookStrategy implements IStrategy {
  login(user: string, password: string) {
    console.log('login with facebook')
    if (user === 'facebook' && password === '123') {
      return true
    }
    return false
  }
}
