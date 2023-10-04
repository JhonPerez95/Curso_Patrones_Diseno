import { IStrategy } from './interfaces'
import { loginFacebookStrategy } from './facebookStrategy'
import { loginGoogleStrategy } from './googleStrategy'

class loginContext {
  private strategies: { [name: string]: IStrategy }

  constructor(
    private facebook: loginFacebookStrategy,
    private google: loginGoogleStrategy
  ) {
    this.strategies = {
      facebook,
      google,
    }
  }

  getStrategy(strategy: string): IStrategy {
    return this.strategies[strategy]
  }
}

const login = new loginContext(
  new loginFacebookStrategy(),
  new loginGoogleStrategy()
)

const facebook = login.getStrategy('facebook')
console.log(facebook.login('facebook', '123'))

const google = login.getStrategy('google')
console.log(google.login('google', '123'))
