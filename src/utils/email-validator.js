const validator = require('email-validator')

module.exports = class EmailValidator {
  isValid (email) {
    return validator.validate(email)
  }
}
