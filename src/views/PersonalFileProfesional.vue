
<template>
    <div class="main-div-profesional">
      <div class="first-div-soignant">
            <h4>Profil du soignant</h4>
          </div>
      <div class="content">


        <div class="main-div-profil">

          <div class="secondary-div-profil">
            <div class="details-profil">
              <h1>{{getOneSoignant.firstName}}  {{getOneSoignant.lastName}}</h1>
              <h2>Métier</h2>
              <h4>{{getOneSoignant.catégorie}} </h4>
              <h2>Email</h2>
              <h4>+33 {{getOneSoignant.numero}}</h4>
              <h2>Doctolib</h2>
              <a href={{getOneSoignant.doctolib}}>{{getOneSoignant.doctolib}}</a>
            <!-- </div> -->


          <!-- </div> -->

          <div class="details-formations-profil">
            <h1 class="text-start">Historique de formations :</h1>

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
        </div>

        <div class="second-div-profil">
        <div class="details-picture-profil">
            <img src="../assets/login-pic.svg">
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

<style scoped>
.main-div-profesional{
  display: flex;
  /* width: 100%; */
  height: 100%;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  /* margin-left: 7.5rem; */
  flex-direction: column;/*row;*/
  align-items: center;
  overflow: hidden;
}
.content {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.main-div-profil {
  display: flex;
  flex-direction: column;
  width: 70%;
  overflow: hidden;
  justify-content: space-around;
}
.details-profil{
  width: 100%;
  margin-right: 0.25rem;
}
.details-picture-profil{
  width: 25rem;
  margin-left: 0.25rem;
  height: 42rem;
  padding-right: 1rem;
}
.details-picture-profil > img {
  border: rgb(221, 221, 221) solid 2px;
  border-radius: 1.25rem;
  object-fit: cover;
  height: 100%;
  width: 100%;
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
  
  height: auto;
}
.second-div-profil{
  display: flex;
  align-items: center;
  justify-content: center;
}
.details-profil{
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  height: 100%;
  align-items: baseline;
  margin-left: 3rem;
}
.details-profil > h1, .details-profil > h2 {
  font-weight: bold;
  text-transform: uppercase;
}
.details-formations-profil{
  /* margin-top: 3rem; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 95%;
}
.details-formations-profil > h1 {
  /* margin-left: 4rem; */
}
h2 + h4, h2 + a {
  padding-left: 1rem;
}
.carousel-control-prev > span , .carousel-control-next > span {
  background-color: rgba(81, 79, 79, 0.309);
  border-radius: 25%;
}
.carousel-caption > h5, .carousel-caption > p{
  color: rgb(81, 79, 79);
}
</style>