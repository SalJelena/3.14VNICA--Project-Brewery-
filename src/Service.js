import axios from 'axios'


export const getAllBeers = () => axios.get('http://localhost:3005/beers')

export const getAllUsers = () => axios.get('http://localhost:3005/users')

export const postUser = (user) => axios.post('http://localhost:3005/users', user)

export const getBeerById = (id) => axios.get(`http://localhost:3005/beers/${id}`)