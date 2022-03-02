import axios from 'axios'

const url = 'http://localhost:5000'



export const fetchInitiatives = () => axios.get(`${url}/initiatives`)
export const createInitiative = (initiative) => axios.post(`${url}/initiatives`, initiative)

export const fetchGroups = () => axios.get(`${url}/groups`)
export const createGroup = (group) => axios.post(`${url}/groups`, group) // frontend NOT YET IMPLEMENTED