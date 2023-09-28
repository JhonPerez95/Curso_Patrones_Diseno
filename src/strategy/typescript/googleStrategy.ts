import { IStrategy } from './interfaces'

export class loginGoogleStrategy implements IStrategy {
  login(user: string, password: string) {
    console.log('login with google')
    if (user === 'google' && password === '123') {
      return true
    }
    return false
  }
}
