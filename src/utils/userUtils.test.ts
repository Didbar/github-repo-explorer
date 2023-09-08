import { generateUserInfoText } from 'src/utils/userUtils' // Replace 'your-file-path' with the actual path to the file containing the function

describe('generateUserInfoText function', () => {
  test('returns "Search for users to get data" when username is undefined', () => {
    const username = undefined
    const result = generateUserInfoText(username)
    expect(result).toBe('Search for users to get data')
  })

  test('returns "Showing users for "username"" when username is provided', () => {
    const username = 'testuser'
    const result = generateUserInfoText(username)
    expect(result).toBe('Showing users for "testuser"')
  })
})
