import axios, { AxiosRequestConfig } from 'axios'
import { GITHUB_BASE_URL } from '../constants'
import GitHubRepository from '../entities/Repository'
import GithubUser from '../entities/User'

const axiosInstance = axios.create({
  baseURL: GITHUB_BASE_URL
})

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
