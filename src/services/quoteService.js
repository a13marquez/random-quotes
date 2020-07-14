import apiClient from './apiClient'

export default {
  getRandomQuote() {
    return apiClient.get('/random')
  },
}
