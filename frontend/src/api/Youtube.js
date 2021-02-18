import axios from 'axios'

export default {
    async searchSong(query) {
        return await (await axios.get(`/api/yt/songs/${query}`))
            .then((response) => {
                console.log(response)
                return response
            })
            .catch((error) => {
                console.log(error);
            })
    }
}