export const generateUserInfoText = (username: string | undefined) => {
  return username ? `Showing users for "${username}"` : 'Search for users to get data'
}
