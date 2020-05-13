import axios from 'axios'
import { response } from 'express'
const bas_url = '/api/WorkOuts'

export default {
    getAllWorkOuts() {
        return axios.get(base_url).then(response => {
            
            return response.data
        })
    },

    addWorkOut(WorkOuts) {
        return axios.post(base_url, WorkOuts).then(response => {
            
            return response.data
        })
    },

    updateWorkOut(WorkOuts) {
        return axios.patch(`${base_url}/${WorkOuts.id}`, WorkOuts).then(response => {
            return response.data
        })
    }
}