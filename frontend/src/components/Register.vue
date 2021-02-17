<template>
  <div class="register">
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="email">E-mail</label>
          <input type="text" name="email" v-model="form.email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="text" name="password" v-model="form.password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from 'axios'
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        await axios({
        method: 'post',
        url: 'http://localhost:3000/api/users',
        data: {
          email: this.form.email,
          password: this.form.password
          },
        })
      }
      catch (error) {
        console.log(error);
      }
    },
  }
};
</script>
<style scoped>
<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>
