import axios from 'axios'

export default {
    async register(email, password) {
        return await axios.post('http://localhost:3000/api/users', {
            email: email,
            password: password,
        })
    }
}
