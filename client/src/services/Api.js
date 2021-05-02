import axios from 'axios'

var api = () => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_SERVER}`
  })
}

export default api;