import axios from 'axios'
import env from './env.json'

export function getUserData(userId) {
    return axios.get(`${env.baseUrl}/users?userId=${userId}`).then(response => {
        return response.data
    })
}

export function getContentData(id) {
    return axios.get(`${env.baseUrl}/content?id=${id}`).then(response => {
        return response.data
    })
}
