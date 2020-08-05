module.exports = class ServerError extends Error {
  constructor () {
    super('Internal Server Error, try again later')
    this.name = 'Server Error'
  }
}
