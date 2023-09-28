export interface IStrategy {
  login(user: string, password: string): boolean
}
