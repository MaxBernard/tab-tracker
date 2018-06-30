import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://tower-2:8081/`
  })
}
