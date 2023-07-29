import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = 'https://api.github.com'
const ACCESS_TOKEN = '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'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${ACCESS_TOKEN}`
  }
})

export interface GithubUser {
  id: number
  login: string
}

export interface GitHubRepository {
  id: number
  name: string
  description: string | null
  stargazers_count: number
}

export interface FetchResponseUser {
  total_count: number
  items: GithubUser[]
}

class UserClient {
  searchUsers = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponseUser>('/search/users', config)
      .then((res) => res.data)
  }

  getUserRepositories = (username: string) => {
    return axiosInstance
      .get<GitHubRepository[]>(`/users/${encodeURIComponent(username)}/repos`)
      .then((res) => res.data)
  }
}

export default UserClient
