<template>
    <div  v-show="showModal === true" class="modal-popup">
      <div class="modal-content">
        <div v-show="currentPage === 1">
          <!-- Page 1 content -->
          {{ titre }}
          {{ content }}
          <h2>Page 1</h2>
            Titre Description
          <p>Content for page 1</p>
          <label for="input-page-1">Titre :</label>
          <input type="text" id="input-page-1" v-model="textPage1">
          <label for="input-page-1">Description :</label>
          <input type="text" id="input-page-1" v-model="textPage1">
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
          <label for="input-page-1">Tâche à faire :</label>
          <input type="text" id="input-page-2" v-model="newTask">
          <button @click="addTask">Ajouter</button>
          <ul>
            <li v-for="(task, index) in tasks" :key="index">
              {{ task }}
              <button @click="removeTask(index)">Supprimer</button>
            </li>
          </ul>
        </div>
        <div v-show="currentPage === 3">
          <!-- Page 3 content -->
          <h2>Page 3</h2>
            Vidéo + questionnaire
          <p>Content for page 3</p>
          <h2>Créer un questionnaire</h2>
    <form @submit.prevent="createQuiz">
      <div>
        <label for="question1">Question 1 :</label>
        <input type="text" id="question1" v-model="questions[0].question">
        <div>
          <input type="radio" id="q1_true" name="q1" value="true" v-model="questions[0].answer">
          <label for="q1_true">Vrai</label>
        </div>
        <div>
          <input type="radio" id="q1_false" name="q1" value="false" v-model="questions[0].answer">
          <label for="q1_false">Faux</label>
        </div>
      </div>
      <div>
        <label for="question2">Question 2 :</label>
        <input type="text" id="question2" v-model="questions[1].question">
        <div>
          <input type="radio" id="q2_true" name="q2" value="true" v-model="questions[1].answer">
          <label for="q2_true">Vrai</label>
        </div>
        <div>
          <input type="radio" id="q2_false" name="q2" value="false" v-model="questions[1].answer">
          <label for="q2_false">Faux</label>
        </div>
      </div>
      <button type="submit">Créer le questionnaire</button>
    </form>
          <label for="video-link">Lien de la vidéo :</label>
    <input type="text" id="video-link" v-model="videoLink">
        </div>
        <div class="modal-buttons">
          <button v-show="currentPage !== 1" @click="prevPage">Prev</button>
          <button @click="closeModal">Fermer la fenêtre modale</button>
          <button v-show="currentPage !== 3" @click="nextPage">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        showModal: true,//false,
        currentPage: 1,
        titre: 'Suivis Parcours',
        content: 'contenu description',
        chronologie: 'TodoList chrnologie',
        newTask: '',
        tasks: [],
        videoLink: 'lien de la vidéo',
        questions: [
        { question: '', answer: null },
        { question: '', answer: null }
      ],
       textPage1: 'test Text',
      };
    },
    methods: {
      closeModal() {
        this.showModal = false;
        this.$emit('close');
      },
        createQuiz() {
      // Traitement de la création du questionnaire
      console.log('Questions :', this.questions);
    },
        addTask() {
      if (this.newTask) {
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
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
  