import { PMT, checkIfValidNumber, convertNumberToCurrency } from '@/composables/usePMT.ts'

describe('Use PMT function', () => {
  it('Given the loan amount between $1000 and $20000000, When Validating, Expect a numeric repayment value', () => {
    // Arrange
    const rules = 1384

    // Act
    const result = PMT(0.1 / 12, 24, 30000) * -1

    // Assert
    expect(Math.trunc(result)).toEqual(rules)
  })

  it('Given the loan amount is a string, When Validating, Expect NaN (not a number)', () => {
    // Arrange
    const rules = NaN

    // Act
    const result = PMT(0.1 / 12, 24, 'asd') * -1

    // Assert
    expect(Math.trunc(result)).toEqual(rules)
  })
})

describe('Use checkIfValidNumber function', () => {
  it('Given a valid number, When Validating, Expect a truthy value', () => {
    // Arrange
    const rules = true

    // Act
    const result = checkIfValidNumber(250)

    // Assert
    expect(result).toEqual(rules)
  })

  it('Given a valid integer, When Validating, Expect a truthy value', () => {
    // Arrange
    const rules = true

    // Act
    const result = checkIfValidNumber(250.54)

    // Assert
    expect(result).toEqual(rules)
  })

  it('Given a non-empty string, When Validating, Expect a falsy value', () => {
    // Arrange
    const rules = false

    // Act
    const result = checkIfValidNumber('asd')

    // Assert
    expect(result).toEqual(rules)
  })
})

describe('Use convertNumberToCurrency function', () => {
  it('Given a valid number, When Validating, Expect a formatted currency value', () => {
    // Arrange
    const rules = 'A$200.00'

    // Act
    const result = convertNumberToCurrency(200)

    // Assert
    expect(result).toEqual(rules)
  })

  it('Given a string, When Validating, Expect a formatted currency value with NaN (not a number)', () => {
    // Arrange
    const rules = 'A$NaN'

    // Act
    const result = convertNumberToCurrency('asd')

    // Assert
    expect(result).toEqual(rules)
  })
})
