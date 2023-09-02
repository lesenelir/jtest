import objToSearchStr from "@/utils/objToSearchStr"

describe('objToSearchStr', () => {
  it('can be used to convert an object to a query string', () => {
    expect(objToSearchStr({
      a: 1,
      b: 2
    })).toEqual('a=1&b=2')
  })
})
