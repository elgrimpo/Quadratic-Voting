import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchCommunities = () => axios.get(`${url}/communities`)
export const createCommunity = (community) => axios.post(`${url}/communities`, community) // TODO: frontend NOT YET IMPLEMENTED

export const fetchInitiatives = () => axios.get(`${url}/initiatives`)
export const createInitiative = (initiative) => axios.post(`${url}/initiatives`, initiative)

export const fetchGroups = () => axios.get(`${url}/groups`)
export const createGroup = (group) => axios.post(`${url}/groups`, group) // TODO: frontend NOT YET IMPLEMENTED

export const fetchCurrentUser = () => axios.get(`${url}/auth/login/success`, { withCredentials: true })
export const fetchUsers = () => axios.get(`${url}/users`)
export const createUser = (user) => axios.post(`${url}/users`, user) // TODO: frontend NOT YET IMPLEMENTED
export const logout = () => axios.get(`${url}/auth/logout`, { withCredentials: true })
