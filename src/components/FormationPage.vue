<template>
    <formation-form v-show="showCreateFormModal" @close="showCreateFormModal = false"></formation-form>
    <div class=" formation-container">
      <div>
        <div class="first-div-soignant">
          <h4>Dashboard</h4>
          <button class="btn btn-primary" @click.prevent="createForm()">Ajouter une formation</button>
        </div>

        </div>
      <div class="inner-container d-block">
        <div class="formations-list mx-5">

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
  import {mapGetters} from "vuex";

  library.add(fas);
  export default {
    components: {
        'font-awesome-icon': FontAwesomeIcon,
        'formation-form': FormationForm,
    },
    data() {
      return {
        currentPage: 1,
        rowsPerPage: 3,
        showCreateFormModal: false
      };
    },
    computed: {
        ...mapGetters([
          'getSoignants', 'getParcours', 'getFormations'
        ]),
      filteredFormations() {
        const rows = [];
        const rowSize = 3;
        for (let i = 0; i < this.getFormations.length; i += rowSize) {
          const row = this.getFormations.slice(i, i + rowSize);
          rows.push(row);
        }
        return rows.slice((this.currentPage - 1) * this.rowsPerPage, this.currentPage * this.rowsPerPage);
      },
    },
    created() {
      this.$store.dispatch("fetchFormations");
    },
    watch: {
      month () {
        this.$store.dispatch("fetchFormations");
      }
    },
    methods: {
      createForm() {
        this.showCreateFormModal = true;

      },
      nextPage() {
        if (this.currentPage < Math.ceil(this.getFormations.length / (this.rowsPerPage * 3))) {
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





<style scoped lang="scss">
@import url("../assets/fonts/fonts.scss");

.first-div-soignant{
  font-family: "source-pro-regular";
  padding: 1rem;
  margin-left: 1rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.05);
  top: 0;
  background-color: white;
  z-index: 10;
button{
  font-size: 14px;
  font-family: source-pro-light;
}
}

h4{
  padding-left: 1rem;
  border-left: 3px solid rgba(0, 0, 0, 0.5);
}
  .header-bloc{
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
    background-color: #ffffff;
  }

  .inner-container {
    flex-direction: row;

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