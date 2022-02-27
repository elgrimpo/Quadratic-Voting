import axios from 'axios'

const url = 'http://localhost:5000/initiatives'

export const fetchInitiatives = () => axios.get(url)
export const createInitiative = (initiative) => axios.post(url, initiative)