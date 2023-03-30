<template>
    <formation-form v-show="showCreateFormModal" @close="showCreateFormModal = false"></formation-form>
    <div class=" formation-container">
      <div class="header-bloc px-3 py-2 d-flex justify-content-between">
          <div class="header-title">
            <h2 class="text-primary" style="margin:0 2rem !important">Formations</h2>
          </div>
          <button class="btn btn-primary" @click.prevent="createForm()">Ajouter une formation</button>
        </div>
      <div class="inner-container d-block">
        <div class="formations-list mx-5">
          <!-- <div class="formations">
            <div class="formation" v-for="formation in filteredFormations" :key="formation.id">
              <div class="formation-title">
                <img src="../assets/jaji.svg" alt="formation image" class="formation-image" />
                <h3 class="text-primary">{{ formation.title }}</h3>
              </div>
            </div>
          </div> -->
          <div class="formations pt-5">
            <div class="row my-5 d-flex justify-content-between" v-for="row in filteredFormations" :key="row[0].id">
              <div class="col-4 formation" v-for="formation in row" :key="formation.id">
                <div class="formation-title">
                  <img src="../assets/jaji.svg" :alt="formation.title" class="formation-image my-3" />
                  <span class="text-primary">{{ formation.title }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination-controls" style="margin-top: 3.5rem;">
            <button @click="prevPage" class="btn btn-primary rounded-circle next-btn" :disabled="currentPage === 1">
              <font-awesome-icon icon="fas fa-chevron-left" />
            </button>
            <span class="page-number mx-2">{{ currentPage }}</span>
            <button @click="nextPage" class="btn btn-primary rounded-circle next-btn" :disabled="currentPage >= Math.ceil(formations.length / (rowsPerPage * 3))">
              <font-awesome-icon icon="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import FormationForm from './forms/FormationForm.vue';

  library.add(fas);
  export default {
    components: {
        'font-awesome-icon': FontAwesomeIcon,
        'formation-form': FormationForm,
    },
    data() {
      return {
        formations: [
          { id: 1 , title: 'Formation 1'},
          { id: 2 , title: 'Formation 2'},
          { id: 3 , title: 'Formation 3'},
          { id: 4 , title: 'Formation 4'},
          { id: 5 , title: 'Formation 5'},
          { id: 6 , title: 'Formation 6'},
          { id: 7 , title: 'Formation 7'},
          { id: 8 , title: 'Formation 8'},
          { id: 9 , title: 'Formation 9'},
          { id: 10 , title: 'Formation 10'},
          { id: 11 , title: 'Formation 11'},
          { id: 12 , title: 'Formation 12'},
          { id: 13 , title: 'Formation 13'}
        ],
        currentPage: 1,
        rowsPerPage: 3,
        showCreateFormModal: false
      };
    },
    computed: {
      // filteredFormations () {
      //   return this.formations.slice((this.currentPage - 1) * this.rowsPerPage, this.currentPage * this.rowsPerPage);
      // },
      // computed: {
      filteredFormations() {
        const rows = [];
        const rowSize = 3;
        for (let i = 0; i < this.formations.length; i += rowSize) {
          const row = this.formations.slice(i, i + rowSize);
          rows.push(row);
        }
        return rows.slice((this.currentPage - 1) * this.rowsPerPage, this.currentPage * this.rowsPerPage);
      },
    },
    methods: {
      createForm() {
        this.showCreateFormModal = true;

      },
      nextPage() {
        if (this.currentPage < Math.ceil(this.formations.length / (this.rowsPerPage * 3))) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
    }
  };
</script>





<style scoped>
  .header-bloc{
    /* margin-left: 2rem;
    margin-right: 1rem; */
    margin: 3% 1rem 3% 2rem;
    width: calc(100% - 4rem)!important;
  }
  .header-title {
    border-left: 2px solid #000000;
    margin-left: 2rem;
    display: flex;
    align-items: center;
  }
  .formation-container {
    flex-direction: row;
    margin-left: 7rem;
    height: 100% !important;
    width: 100% !important;
    background-color: #ffffff;
  }

  .inner-container {
    flex-direction: row;
    height: 80%!important;
    width: calc(100% - 4rem)!important;
    margin: 0 2rem 0 2rem;
    /* background-color: #f5f6f7; */
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  .formations-list {
    margin-top: 2rem;
  }

  .header-bloc {
    margin-top: 3%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  .formations-list {  
    border-radius: 8px;
    height: 100% !important;
    margin-top: 2rem;
  }

  .formations {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .formations .row {
    width: 90%
  }

  .formation-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .text-primary {
    color: #1f2f42 !important;
  }

  .formation {
    /* border: 1px solid black; */
    width: 25%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    padding: 10px;
    background-color: #ffffff;
  }
  .formation:hover {
    background-color: #d5e4f6;
    cursor: pointer;
  }
</style>