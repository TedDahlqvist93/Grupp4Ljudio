import axios from 'axios'

export default {
    async add(data) {
        return await axios.post('http://localhost:3000/api/playlists', data)
            .then((response) => {
                console.log(response)
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    },
    async get(data) {
        return await axios.get('http://localhost:3000/api/playlists', data)
            .then((response) => {
                console.log(response)
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    },
    async remove(data) {
        return await axios.delete('http://localhost:3000/playlists', data)
            .then((response) => {
                console.log(response)
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
