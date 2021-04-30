import axios from 'axios'

var api = () => {
  return axios.create({
    baseURL: 'http://localhost:3001'
  })
}

export default api;