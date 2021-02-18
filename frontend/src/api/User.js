import axios from 'axios'

export default {
    async getStatus(data) {
        return await axios.get('http://localhost:3000/api/login', data)
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    },
    async register(data) {
        return await axios.post('http://localhost:3000/api/users', data)
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    },
    async login(data) {
        return await axios.post('http://localhost:3000/api/login', data)
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    },
    async logout(data) {
        return await axios.delete('http://localhost:3000/api/login', data)
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
