
<template>
    <div class="contenu">
      <div class="texte">
        <side-bar></side-bar>
        <div class="title-1">
            Opération Laser
        </div>
        <div class="title-2">
            Nom & Prénom : 
        </div>
        <div class="text-normal">
            Dan Reynolds
        </div> 
        <div class="title-2">
            Description : 
        </div>
        <div class="text-normal">
          L'œil, organe essentiel de la vision, comprend 2 parties : le globe oculaire et le nerf optique qui permet la remontée d'images vers le cerveau. Pour former une image, les rayons lumineux traversent la cornée, membrane transparente, puis le cristallin qui permet l'accommodation pour le passage de la vision de près vers la vision de loin. Enfin l'image va se former sur la rétine, tissu nerveux et fortement vascularisé qui va transmettre l'image vers le cerveau via le nerf optique.        
        </div>
        <div class="title-2">
          Chronologie :
        </div>
        <div class="chronologie"></div>
        <div class="arrows">
          <img class="arrow" src="https://cdn.discordapp.com/attachments/1089920958502023220/1090958172098940958/fleche.png">
          <img class="arrow" src="https://cdn.discordapp.com/attachments/1089920958502023220/1090958172098940958/fleche.png">
          <img class="arrow" src="https://cdn.discordapp.com/attachments/1089920958502023220/1090958172098940958/fleche.png">
          <img class="arrow" src="https://cdn.discordapp.com/attachments/1089920958502023220/1090958172098940958/fleche.png">
        </div>
        <div class="desc-arrow"> 
          <div class="description">
            <div class="title-3">
              Pré-Opération :
            </div>
            <div class="text-normal">
              rendez-vous préopératoire, test visuel, expliquer le processus
            </div>
          </div>
          <div class="description">
            <div class="title-3">
              Opération
            </div>
          </div>
          <div class="description">
            <div class="title-3">
              Post-Opération :
            </div>
            <div class="text-normal">
              prendre les médicaments prescrit par le médecin
            </div>
          </div>
          <div class="description">
            <div class="title-3">
              Rétablissement :
            </div>
            <div class="text-normal">
              Reprendre rendez-vous avec le médecin pour une mise à point
            </div>
          </div>
        </div>
        <div class="title-2">
          Formation : 
        </div>
        <div class="formation">
            <!--<img class="image-formation" src="https://cdn.discordapp.com/attachments/1090635071041573045/1090635504803905617/pexels-pavel-danilyuk-6339342.jpg"> 
            <p>Formation 1</p>-->
            <iframe width="700" height="400" src="https://www.youtube.com/embed/CnwpiPsDxTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="container-button">
          <button class="modif-button">
            Modifier
          </button>
          <button class="cancel-button">
            Retour
          </button>
        </div>
      </div>
      <div class="left-img">
        <img class="image" src="https://cdn.discordapp.com/attachments/1090635071041573045/1090635450554777711/pexels-ksenia-chernaya-5752263.jpg">
      </div>
      
    </div>
</template>
  
 <script>
  import SideBar from './SideBar.vue'
  
  export default {
    components: {
      'side-bar': SideBar,
    },
  };
</script>
  
<style scoped>

  .texte{
    margin-left: 3rem;
    width: 873px;
    height: 144px;
  }
  .title-1 {
    font-family: "Prompt", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 82px;
    text-align: left;
    
    margin-bottom: 40px;

    color: #1F2F42;


  }
  .title-2{
    font-family: "Prompt", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    text-align: left;
    
    margin-bottom: 5px;

    color: #1F2F42;
  }
  .title-3{
    font-family: "Prompt", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    
    margin-bottom: 5px;

    color: #1F2F42;
  }
  .text-normal{
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: justify;
    
    margin-bottom: 40px;

    color: #1F2F42;
  }
  .image-formation {
    position: relative;
    top:0;
    left: 0;
    transform: translate(0%, -50%);
    width: 370px;
    height: 152px;
    object-fit: cover;

    border-radius: 20px;
  }
  .formation {
    margin-left: -173px;
  }
  .formation p {
    transform: translate(-37%,100%);

    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;

    color:#ffffff;
  }
  .left-img img {
    height: 900px; 
    position: fixed;
    transform: translate(42%,-15%);
  }
  
  .chronologie {
    width: 869px;
    height: 24px;
    left: 100px;
    top: 516px;
    margin-top: 20px;

    background: #75A3E3;
    border-radius: 20px;
  }
  .arrows{
    width: 869px;
    height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .arrow {
    width: 75px;
    height: auto;
    transform: rotate(90deg);
  }
  .desc-arrow{
    display: flex;
    justify-content: space-between;
    
  }
  .desc-arrow .text-normal{
    text-align: center;
  }
  .description{
    border: 1px solid #75A3E3;
    margin-top: 7px;
  }
  
  .container-button {
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column; 
}

  .modif-button,
.cancel-button {
  position: relative;
  float: left;
  width: 107.13px;
  height: 35.71px;
  padding: 0;
  margin-top: 30px; 
  border-radius: 8px;
  background-color: #355070;
  color: #ffffff;
  border: 1px solid #1F2F42;
  
  
}
.modif-button{

}
.cancel-button {
  margin-top: 10px;
  margin-bottom: 80px;
  background-color: white;
  color: #E67377;
  border: 3px solid #E67377;
}


</style>
  
  