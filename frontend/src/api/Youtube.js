import axios from 'axios'

export default {
    async searchSong(query) {
        return await axios.get(`http://localhost:3000/api/yt/songs/${query}`)
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    }
}