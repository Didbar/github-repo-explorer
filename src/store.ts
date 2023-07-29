import { create } from 'zustand'

interface UserQuery {
  searchedUser?: string
  limit?: number
}

interface UserRepoQueryStore {
  userQuery: UserQuery
  setSearchedUser: (searchText: string) => void
}

const useUserQueryStore = create<UserRepoQueryStore>((set) => ({
  userQuery: {},
  setSearchedUser: (searchedUser) => set(() => ({ userQuery: { searchedUser } }))
}))
export default useUserQueryStore
