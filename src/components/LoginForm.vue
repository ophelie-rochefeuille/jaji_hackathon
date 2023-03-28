<template>
  <div class="login-container w-100 col-md-12 d-inline-flex">
      <!-- v-bind:class="{ 'responsive-layout': isResponsive }"> -->
    <div class="row col-md-12">
      <div class="left-section col-md-8">
        <img src="../assets/logo-jaji.png" alt="Logo">
        <br>
        <img src="../assets/login-picture.png" alt="Image">
      </div>
      <div class="right-section col-md-4 d-flex align-items-center justify-content-center">
        <!-- Login form fields -->
        <div class="form-group">
          <h2 class="login-name text-primary">Back Office Content</h2>
          <p class="login-description">Renseignez vos identifiants pour vous connecter</p>
          <form>
            <div class="row">
              <div>   
                <div class="d-flex justify-content-between">
                  <label for="username" class="text-left">Addresse email:</label>
                  <label for="show-password" class="ml-auto" v-if="false">Afficher</label>
                </div>
                <input type="text" id="username" name="username" class="form-control" v-model="emailUser">
              </div>
            </div>
            <div class="row">
              <div>
                <div class="d-flex justify-content-between">
                  <label for="password">Mot de passe:</label>
                  <label for="show-password" class="login-btn ml-auto" @click="showPassword = !showPassword">{{ showPassword ? 'Cacher' : 'Afficher' }}</label>
                </div>
                <input :type="passwordFieldType" id="password" name="password" class="form-control" v-model="passwordUser">
              </div>
            </div>
          </form>
          <div class="d-flex justify-content-end">
            <label for class="login-btn ml-auto text-right" @click.prevent="oublierMdp()">Mot de passe oublié ?</label>
          </div>
          <button type="submit" class="btn btn-primary btn-block w-100 mt-3" @click="login()">Se connecter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      isResponsive: false,
      showPassword: false,
      emailUser: '',
      passwordUser: ''
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? 'text' : 'password';
    }
  },
  mounted() {
    window.addEventListener("resize", this.checkResponsive);
    this.checkResponsive();
  },
  methods: {
    checkResponsive() {
      this.isResponsive = window.innerWidth <= 768;
      /* Set the value based on the screen size */
    },
    login() {
       let formData = {
        username: this.username,
        password: this.password
      };
      axios.post('http://localhost:9000/api/users', formData)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
};

</script>

<style scoped>
.responsive-layout .login-container {
  flex-direction: row; /* Set the flex-direction property to row */
  width: 100% !important; /* Set the width to 100% */
}

.left-section {
  display: block;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex: 0 0 auto; /* Set the flex property to 0 0 auto */
}

.right-section {
  display: block;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 20px;
  flex: 0 0 auto; /* Set the flex property to 0 0 auto */
}

.responsive-layout .left-section,
.responsive-layout .right-section {
  /* Set both sections to take 100% of the container width */
  flex-basis: 100%;
  max-width: 100%;
}

.page-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.login-description {
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.login-btn {
  font-size: 0.8rem;
  color:#75a3e3;
  margin-bottom: 1rem;
}

.login-btn:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
