import storage from "@/utils/storage"

describe('storage', () => {
  it('can be used to set a value', () => {
    storage.set('name', 'my name')
    expect(localStorage.getItem('my-app-name')).toBe('my name')
  })

  it('can be used to get a value', () => {
    localStorage.setItem('my-app-name', 'my name')
    expect(storage.get('name')).toBe('my name')
  })
})


