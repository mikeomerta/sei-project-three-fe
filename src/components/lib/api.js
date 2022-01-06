import axios from 'axios'

const baseUrl = '/api'

export function getAllProjects() {
  return axios.get(`${baseUrl}/projects`)
}

export function register(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function login(formData) {
  return axios.post(`${baseUrl}/login`, formData) 
}