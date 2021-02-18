<template>
  <div class="register">
    <div>
      <form @submit.prevent="this.loginForm" v-if="this.loginModal">
        <div>
          <label for="email">E-mail</label>
          <input type="text" name="email" v-model="loginForm.email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="text" name="password" v-model="loginForm.password" required />
        </div>
        <button type="submit" @click="submitLogin">Login</button>
        <button v-on:click="showLoginForm">Close</button>
      </form>
      <form @submit.prevent="this.registerForm" v-if="this.registerModal">
        <div>
          <label for="email">First Name</label>
          <input type="text" name="email" v-model="registerForm.firstName" required />
        </div>
        <div>
          <label for="email">Last Name</label>
          <input type="text" name="email" v-model="registerForm.lastName" required />
        </div>
        <div>
          <label for="email">E-mail</label>
          <input type="text" name="email" v-model="registerForm.email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="text" name="password" v-model="registerForm.password" required />
        </div>
        <button type="submit" @click="submitRegister">Register</button>
        <button v-on:click="showRegisterForm">Close</button>
      </form>
        <div v-if="!user.loggedIn && !loginModal && !registerModal">
            <button @click="showRegisterForm">Register</button>
            <button @click="showLoginForm">Login</button>
        </div>
        <div v-if="user.loggedIn">
            <div v-for="(value, name) in user" v-bind:key="name">
              {{ name }}: {{ value }}
            </div>
            <button v-on:click="logOut">Logout</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      user: this.getUser(),
      registerModal: false,
      loginModal: false,
      loginForm: {
          email: "",
          password: "",
      },
      registerForm: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      },
    };
  },
  methods: {
    ...mapActions(["register"]),
    ...mapActions(['logout']),
    ...mapActions(['login']),
    ...mapGetters(["getUser"]),

    async submitRegister(e) {
        await this.register(this.registerForm)
        .then(response => {
            this.user = this.getUser();
            if (this.user.loggedIn) {
              console.log("email in use")
              this.registerForm = {};
              this.registerModal = false;
              this.loginModal = false;
            }
        })
        .catch((error) => {
            console.log("err", error);
        })

    },
    async showRegisterForm() {
        this.registerModal = !this.registerModal;
        await this.$nextTick();
    },
    async showLoginForm() {
        this.loginModal = !this.loginModal;
        await this.$nextTick();
    },
    async logOut() {
        await this.logout(this.user)
        .then(response => {
            this.registerModal = false;
            this.loginModal = false;
            this.user = this.getUser();
        })
        .catch((error) => {
            console.log(error);
        })
    },
    async submitLogin(e) {
        console.log("submit")
        await this.login(this.loginForm)
        .then(response => {
            console.log("then")
            this.registerModal = false;
            this.loginModal = false;
            this.user = this.getUser();
        })
        .catch((error) => {
            console.log(error);
        })
    }

  },
};
</script>
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
  padding: 13px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>
