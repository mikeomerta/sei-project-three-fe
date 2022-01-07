import axios from 'axios'
import { getToken } from '../lib/auth'

const baseUrl = '/api'

export function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getAllProjects() {
  return axios.get(`${baseUrl}/projects`)
}

export function createProject(formData) {
  return axios.post('/api/projects', formData, headers())
}

export function register(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function login(formData) {
  return axios.post(`${baseUrl}/login`, formData) 
}