import axios from 'axios'

const baseUrl = '/api'

export function getAllProjects() {
  return axios.get(`${baseUrl}/projects`)
}