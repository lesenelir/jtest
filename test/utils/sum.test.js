const sum = require('../../src/utils/sum')

describe('sum', () => {
  it('can be used to add two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
