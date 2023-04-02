<template>
    <!-- <formation-form v-show="showCreateFormModal" @close="showCreateFormModal = false"></formation-form> -->
    <div class="soin-container">
      <div class="header-bloc px-3 py-2 d-flex justify-content-between">
          <div class="header-title">
            <h2 class="text-primary" style="margin:0 2rem !important">Suivi de Soins</h2>
          </div>
          <button class="btn btn-primary" @click.prevent="createForm()"><font-awesome-icon class="icon" :icon="`fas fa-circle-plus`" /> Ajouter un soin</button>
        </div>
      <div class="inner-container d-block">
        <div class="soins-list mx-5">

          <div class="soins pt-4">
            <div class="row my-5 d-flex" v-for="row in filteredSoins" :key="row[0].id">
              <div class="col-4 soin" v-for="soin in row" :key="soin.id" >
                <div class="custom-card">
                  <div class="content">
                    <h2>{{ soin.title }}</h2>
                  </div>
                  <img src="../assets/jaji.svg" :alt="soin.title"  />
                </div>
              </div>
            </div>
          </div>
          <div class="pagination-controls pb-3" style="margin: 2rem 0;">
            <button @click="prevPage" class="btn btn-primary rounded-circle next-btn" :disabled="currentPage === 1">
              <font-awesome-icon icon="fas fa-chevron-left" />
            </button>
            <span class="page-number mx-2">{{ currentPage }}</span>
            <button @click="nextPage" class="btn btn-primary rounded-circle next-btn" :disabled="currentPage >= Math.ceil(getParcours.length / (rowsPerPage * 3))">
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
//   import FormationForm from './forms/FormationForm.vue';
  import {mapGetters} from "vuex";

  library.add(fas);
  export default {
    components: {
        'font-awesome-icon': FontAwesomeIcon,
        // 'formation-form': FormationForm,
    },
    data() {
      return {
        currentPage: 1,
        rowsPerPage: 3,
        showCreateFormModal: false
      };
    },
    created() {
      this.$store.dispatch("fetchParcours");
    },
    computed: {
      ...mapGetters([
        'getParcours'
      ]),
      filteredSoins() {
        const rows = [];
        const rowSize = 3;
        for (let i = 0; i < this.getParcours.length; i += rowSize) {
          const row = this.getParcours.slice(i, i + rowSize);
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
            if (this.currentPage < Math.ceil(this.getParcours.length / (this.rowsPerPage * 3))) {
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
    margin: 0 1rem 3% 2rem;
    width: calc(100% - 4rem)!important;
  }
  .header-title {
    border-left: 2px solid #000000;
    margin-left: 2rem;
    display: flex;
    align-items: center;
  }
  .soin-container {
    flex-direction: row;
    margin-left: 7rem;
    background-color: #ffffff;
  }

  .inner-container {
    flex-direction: row;
    height: 100% !important;
    width: calc(100% - 4rem)!important;
    margin: 0 2rem 0 2rem;
    /* background-color: #f5f6f7; */
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.1);
  }

  .soins-list {
    margin-top: 2rem;
  }

  .header-bloc {
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.1);
  }

  .soins-list {  
    border-radius: 8px;
    height: 100% !important;
    margin-top: 2rem;
  }

  .soins {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .soins .row {
    width: 90%
  }

  .soin-title {
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

  .soin {
    /* border: 1px solid black; */
    width: 25%;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    background-color: #ffffff;
    margin: 0 4%;
  }
  .soin:hover {
    background-color: #d5e4f6;
    cursor: pointer;
  }

  .img-dashboard{
    max-height: 100%;
    max-width: 100%;
    border-radius: 4px 4px 0px 0px;
  }

  .custom-card {
    width: auto;
    height: 11.75rem;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
  }

  .custom-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .custom-card .content {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    padding: 30px 20px 20px 20px;
    height: auto;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  }
  .custom-card h2 {
  margin: 0;
  font-size: 17px;
  color: #fff;
  margin-bottom: 4px;
  }
</style>