const validator = require('email-validator')
class EmailValidator {
  isValid (email) {
    const validation = validator.validate(email)
    return validation
  }
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('davioliveira@gmail.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false if validator returns false', () => {
    validator.isEmailValid = false
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('invalid_email@email.com')
    expect(isEmailValid).toBe(false)
  })
})
