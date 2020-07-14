import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://api.quotable.io',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default apiClient
