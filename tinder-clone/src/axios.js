import axios from 'axios'

const instance = axios.create({
    baseURL: "https://zeph-tinder-backend.herokuapp.com"
})

export default instance