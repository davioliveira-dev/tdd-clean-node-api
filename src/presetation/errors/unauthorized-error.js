module.exports = class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized my friend ;)')
    this.name = 'UnauthorizedError'
  }
}
