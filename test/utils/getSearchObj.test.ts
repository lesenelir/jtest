import getSearchObj from "@/utils/getSearchObj"

describe('getSearchObj', () => {
  it('can be retrieved the query parameter object from the current URL', () => {
    window.location.href = 'https://google.com/?a=1&b=2'
    // Object.defineProperty(window, 'location', {
    //   writable: true,
    //   value: { href: 'https://google.com?a=1&b=2', search: '?a=1&b=2' },
    // })

    expect(window.location.search).toEqual('?a=1&b=2')
    expect(getSearchObj()).toEqual({ a: '1', b: '2' })
  })

  it('empty parameter', () => {
    window.location.href = 'https://google.com/'
    // Object.defineProperty(window, 'location', {
    //   writable: true,
    //   value: { href: 'https://google.com', search: '' },
    // })

    expect(window.location.search).toEqual('')
    expect(getSearchObj()).toEqual({})
  })

})
