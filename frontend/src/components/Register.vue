<template>
  <div class="register">
    <div>
      <form @submit.prevent="this.loginForm" v-if="loginModal">
        <div>
          <label for="email">E-mail</label>
          <input type="text" name="email" v-model="loginForm.email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="text" name="password" v-model="loginForm.password" required />
        </div>
        <button type="submit" @click="submitLogin">Login</button>
        <button v-on:click="loginModal = !loginModal">Close</button>
      </form>
      <form @submit.prevent="registerForm" v-if="registerModal">
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
        <button type="submit" @click="submitRegister">Sign Up</button>
        <button v-on:click="registerModal = !registerModal">Close</button>
      </form>
        <div class="auth-buttons" v-if="!user.loggedIn && !loginModal && !registerModal">
            <button @click="registerModal = !registerModal">Sign Up</button>
            <button @click="loginModal = !loginModal">Login</button>
        </div>
        <div v-if="user.loggedIn">
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
  async mounted() {
  },
  methods: {
    ...mapActions(["register"]),
    ...mapActions(['logout']),
    ...mapActions(['login']),
    ...mapActions(['getPlaylists']),
    ...mapGetters(["getUser"]),

    async submitRegister() {
        await this.register(this.registerForm)
        .then(response => {
            this.user = this.getUser();
            if (this.user.loggedIn) {
              this.registerForm = {};
              this.registerModal = false;
              this.loginModal = false;
            }
        })
        .catch((error) => {
            console.log("err", error);
        })

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
    async submitLogin() {
        await this.login(this.loginForm)
        .then(response => {
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
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
.auth-buttons {
  direction: "rtl";
}
</style>
