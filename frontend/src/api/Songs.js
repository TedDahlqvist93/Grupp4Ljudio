import axios from 'axios'

export default {
    async add(data) {
        return await axios.post('http://localhost:3000/api/songs', data)
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    },
    async get(data) {
        return await axios.get('http://localhost:3000/api/songs', data)
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    },
    async remove(data) {
        return await axios.delete('http://localhost:3000/songs', data)
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
