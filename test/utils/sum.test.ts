import sum from "@/utils/sum"

describe('sum', () => {
  it('can be used to add two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
