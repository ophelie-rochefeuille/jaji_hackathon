<template>
  <div>
    <h1>Bienvenue sur mon formulaire </h1>
    <router-link to="/">Accéder a la page d'accueil</router-link>
  </div>

  <div class="form-page">
    <form @submit.prevent="handleSubmit">
      <label for="name">Nom:</label>
      <input id="name" v-model="name" type="text" required>

      <label for="email">Email:</label>
      <input id="email" v-model="email" type="email" required>

      <label for="message">Message:</label>
      <textarea id="message" v-model="message"></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    handleSubmit() {
      // Envoyer les données du formulaire au serveur
      console.log(this.name, this.email, this.message)
    }
  }
}
</script>
