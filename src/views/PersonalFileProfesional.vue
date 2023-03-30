<template>
  <div class="main-div-profesional">
    <div class="first-div-soignant">
      <h4>Profil du soignant</h4>
    </div>

    <div class="main-div-profil">

      <div class="secondary-div-profil">
        <div class="details-profil">
          <span>{{getOneSoignant.firstName}} {{getOneSoignant.lastName}}</span>
          <span>{{getOneSoignant.catégorie}}</span>
          <span>{{getOneSoignant.numero}}</span>
          <span>{{getOneSoignant.doctolib}}</span>
        </div>

        <div class="details-picture-profil">
          <img src="../assets/login-pic.svg">
        </div>
      </div>

      <div class="details-formations-profil">
        <h5 class="text-start">Formations du professionnel</h5>

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/health.jpg" class=" w-50" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/health.jpg" class=" w-50" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/health.jpg" class=" w-50" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  created() {
    this.$store.dispatch("fetchOneSoignant", this.$route.params.id);
  },
  watch: {
    month () {
      this.$store.dispatch("fetchOneSoignant", this.$route.params.id)
    }
  },
  computed: {
    ...mapGetters([
      'getOneSoignant'
    ]),}
}
</script>

<style scoped lang="scss">


.main-div-profesional{
  width: 100%;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  background-color: white;
  margin-left: 7.5rem;
}

.details-profil{
  width: 50%;
  margin-right: 0.25rem;
}

.details-picture-profil{
  width: 50%;
  margin-left: 0.25rem;
}
.first-div-soignant{
  padding-top: 1rem;
  margin-left: 1rem;
  display: flex;
  position: sticky;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.05);
  top: 0;
  background-color: white;
  z-index: 10;
}

.secondary-div-profil{
  margin: 1rem;
  display: flex;
}

.details-profil{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

}

.details-formations-profil{
  margin-top: 3rem;
}


</style>