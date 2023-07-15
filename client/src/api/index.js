import axios from 'axios'

const url = 'http://localhost:8000'

//TODO: change naming to "fetchSubscribedCommunities"
export const fetchCommunities = (subscriptions) => axios.get(`${url}/communities`, {params: {subscriptions: subscriptions}})
export const fetchAllCommunities = () => axios.get(`${url}/communities/all`)
export const createCommunity = (community) => axios.post(`${url}/communities`, community)
export const updateCommunity = (community) => axios.post(`${url}/communities/${community._id}`, community) // TODO: BACKEND
export const deleteCommunity = (community) => axios.delete(`${url}/communities/${community._id}`, community) // TODO: BACKEND

export const fetchInitiatives = (filters) => axios.get(`${url}/initiatives`, {params: filters})
export const createInitiative = (initiative) => axios.post(`${url}/initiatives`, initiative)
export const updateInitiative = (initiative) => axios.post(`${url}/initiatives/${initiative._id}`, initiative)
export const deleteInitiative = (initiative) => axios.delete(`${url}/initiatives/${initiative._id}`, initiative)


export const fetchGroups = (filters) => axios.get(`${url}/groups`, {params: filters})
export const createGroup = (group) => axios.post(`${url}/groups`, group)
export const updateGroup = (group) => axios.post(`${url}/groups/${group._id}`, group)
export const deleteGroup = (group) => axios.delete(`${url}/groups/${group._id}`, group)

export const fetchCurrentUser = () => axios.get(`${url}/auth/login/success`, { withCredentials: true })
export const fetchUsers = () => axios.get(`${url}/users`)
export const createUser = (user) => axios.post(`${url}/users`, user) // TODO: frontend NOT YET IMPLEMENTED
export const updateUser = (user) => axios.post(`${url}/users/${user._id}`, user)
export const logout = () => axios.get(`${url}/auth/logout`, { withCredentials: true })
