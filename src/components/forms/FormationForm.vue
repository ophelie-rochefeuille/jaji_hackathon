<template>
    <div class="modal-popup">
      <div class="modal-content">
        <div v-show="currentPage === 1">
          <!-- Page 1 content -->
          {{ titre }}
          {{ content }}
          <h2>Page 1</h2>
            Titre Description
          <p>Content for page 1</p>
        </div>
        <div v-show="currentPage === 2">
          <!-- Page 2 content -->
          <!-- 
            titre 
            description
            chronologie
            vidéo (lien vidéo) / questionnaire => pas encore en bdd
           -->
          <h2>Page 2</h2>
          {{chronologie}}
          <p>Content for page 2</p>
        </div>
        <div v-show="currentPage === 3">
          <!-- Page 3 content -->
          <h2>Page 3</h2>
            Vidéo + questionnaire
          <p>Content for page 3</p>
        </div>
        <div class="modal-buttons">
          <button v-show="currentPage !== 1" @click="prevPage">Prev</button>
          <button @click="showModal = false">Fermer la fenêtre modale</button>
          <button v-show="currentPage !== 3" @click="nextPage">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentPage: 1,
        titre: 'Suivis Parcours',
        content: 'contenu description',
        chronologie: 'TodoList chrnologie'
      };
    },
    methods: {
      nextPage() {
        this.currentPage++;
      },
      prevPage() {
        this.currentPage--;
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 80%;
    max-width: 600px;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
  }
  
  button:hover {
    background-color: #0062cc;
  }
  </style>
  