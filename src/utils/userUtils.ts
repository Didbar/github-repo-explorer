export const generateUserInfoText = (username: string | null) => {
  return username ? `Showing users for "${username}"` : 'Search for users to get data'
}
