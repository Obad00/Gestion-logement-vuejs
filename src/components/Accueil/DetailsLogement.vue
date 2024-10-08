<template>




    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="details.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>


    <header style="height: 90px;">
        <nav>
            <a href="#"><img src="@/assets/image/logo.png" alt="#"
                    style="margin-top: 20px; margin-left: 95px;position: relative;z-index: 1;"></a>
            <ul>
                <li><a href="/">Accueil</a></li>
            <li><a href="/apropos">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Services</a></li>
            </ul>
            <div class="btn">
                <button class="btn1" style="width: 86px; height: 24px;">connexion</button>
                <button class="btn2" style="width: 133px; height: 40px;">inscription</button>
            </div>
        </nav>
    </header>
    <main>
        <section style="width: 100%;height: 1100px;">
            <div v-if="logement" class="sect13">
                <div style="display: flex;">
                    <h1>Détails de l’Appartement</h1>
                    <img class="rect13" src="@/assets/image/Rectangle 868 (1).png" alt="" style="z-index: -1;">
                    <img class="rect23" src="@/assets/image/Rectangle 868.png" alt="" style="position: relative; z-index: 1;">
                </div>
                <div class="container3">
                    <h1 style="z-index: -1;">{{ logement.titre }}</h1>
                    <div style="display: flex;">
                        <img src="@/assets/image/pexels-sevenstorm-juhaszimrus-443383 1.png" alt="" style="position: relative; z-index: 1;">
                        <p>{{ logement.description }}</p>
                    </div>
                    <div class="mini-icon">
                        <div>
                            <img src="@/assets/image/mdi_bed.png" alt="" class="icon">
                            <span >{{ logement.nombre_chambre }} chambres</span>
                        </div>
                     <br>
                        <br>
                        <div>
                            <img src="@/assets/image/fa-solid_bath.png" alt="" class="icon">
                            <span>{{ logement.nombre_toilette }} toilettes</span>
                        </div>
                       <br>
                        <br>
                        <div>
                            <img src="@/assets/image/fluent_globe-surface-20-filled.png" alt="" class="icon">
                            <span>{{ logement.surface }} m² de surface</span>
                        </div>
                        <button @click="passerReservation(logement.id)">Passer la réservation</button>
                    </div>
                </div>   
                <div  class="rectangle">
                    <img class="rectangle1" src="@/assets/image/Rectangle 868.png" alt="" style="z-index: -1;">
                    <img class="rectangle2" src="@/assets/image/Rectangle 868 (1).png" alt="" style="position: relative; z-index: 1;">
                </div>
            </div>
        </section>
        <section class="sct23">
            <div class="content23">
                <h1>Contactez-nous</h1>
                <p>Vous ne trouvez pas ce que vous cherchez, nous pouvons vous aider</p>
                <button>Envoyer un message</button>
            </div>
            <div class="pexel">
                <img src="@/assets/image/pexels-expect-best-323705__2_-removebg-preview (1) 1.png" alt="">
                <img src="@/assets/image/pexels-jared-lung-2111892-removebg-preview (1) 1.png" alt="">
            </div>
        </section>
    </main>

    <footer>
        <div style="display: flex;">
            <a href=""><img src="@/assets/image/logo.png" alt=""></a>
            <ul>
                <li><a href="/">Accueil</a></li>
            <li><a href="/apropos">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Services</a></li>
            </ul>
        </div>
        <p>Copyright bg Creative Academy All Right Reserved.</p>
    </footer>
</template>

<script>
import logementService from '@/services/logementService';
import reservationService from '@/services/reservationService'; 
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      logement: null // Pour stocker les détails d'un seul logement
    };
  },
  mounted() {
    this.fetchLogementById();
  },
  methods: {
    fetchLogementById() {
      const logementId = this.$route.params.id; // Récupérer l'ID à partir de l'URL
      logementService.getLogementById(logementId)
        .then(response => {
          this.logement = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du logement:', error);
        });
    },
    
    passerReservation(logementId) {
    const reservationData = {
        logement: {
            id: logementId // L'ID du logement
        },
        statut: 'EN_ATTENTE',
        deletedByOwner: false,
        deletedByTenant: false
    };

    // Appel au service de réservation
    reservationService.createReservation(reservationData)
        .then(() => {
            Swal.fire({
                title: 'Succès!',
                text: 'Réservation effectuée avec succès !',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        })
        .catch(error => {
            console.error('Erreur lors de la réservation:', error);
            Swal.fire({
                title: 'Erreur!',
                text: 'Vous devez être connecté pour passer une réservation.',
                icon: 'error',
                confirmButtonText: 'Se connecter'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Rediriger vers la page de connexion
                    window.location.href = '/login'; // Remplacez '/login' par l'URL de votre page de connexion
                }
            });
        });

        }


        }
        };
</script>


<style scoped>

  * {
    margin: 0;
    padding: 0;
    font-family: Poppins;
    /*background: #F3FFF4;*/
}

/*style du header*/
header {
    background: linear-gradient(112.9deg, #356F37 0.98%, rgba(0, 0, 0, 0.84) 165.36%);
    width: 100%;
    height: 90px;
}

nav {
    display: flex;
    width: 100%;
    height: 100%;
}

nav ul {
    display: flex;
    gap: 2rem;
    margin-left: 300px;
    margin-top: 20px;
}

nav li {
    display: grid;
    list-style: none;
    place-content: right;
    position: relative;
    cursor: pointer;
    margin-top: 20px;
}

nav a {
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    transition: 0.5s;
}

nav a:hover {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;

}

.btn {
    margin-left: 160px;
    margin-top: 20px;
}

.btn1 {
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
}

.btn2 {
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    color: #356F37;
    background-color: #ffffff;
}

/*style du main*/
/*section1*/
.sect13 h1 {
    font-size: 45px;
    font-weight: 600;
    line-height: 72px;
    text-align: center;
    margin-left: 70px;
    margin-top: 0px;
}

.rect13 {
    margin-top: 90px;
    margin-left: 920px;
    width: 100px;
    height: 100px;

}

.rect23 {
    margin-top: 40px;
    width: 100px;
    height: 100px;
    margin-left: -35px;

}

.container3 {
    height: 160px;
    background: #356F37;
    margin-left: 70px;
    margin-top: 63px;
}

.container3 h1 {
    padding-left: 660px;
    width: 488px;
    height: 120px;
    color: #FFFFFF;
    padding-top: 20px;
    font-size: 40px;
    font-weight: 400;
    line-height: 60px;
    text-align: left;
}

.container3 img {
    margin-top: -210px;
    margin-left: 40px;
}

.container3 p {
    width: 488px;
    height: 63px;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.13px;
    text-align: left;
    color: #555555;
    margin-top: 40px;
    margin-left: 120px;
}

.mini-icon {
    margin-left: 700px;
    margin-top: -300px;
}

.mini-icon span {
    font-size: 18px;
    font-weight: 500;
    line-height: 21.13px;
    text-align: left;
    color: #555555;
    margin-left: 20px;
}

.icon {
    width: 25px;
    height: 25px;
    margin-top: 500px;
}

.mini-icon button {
    width: 282px;
    height: 50px;
    border-radius: 10px;
    font-size: 22px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    background: #EB9655;
border: none;
margin-top: 40px;
margin-left: 30px;
}
.rectangle1{
    margin-top: 555px;
    margin-left: 110px;
}
.rectangle2{
    margin-left: -45px;
    margin-top: -30px;
}
/*section2*/
.sct23{
    margin-left: 130px;
}
.content23 {
    width: 1120px;
    height: 420px;
    border-radius: 20px;
    background: #356F37;
    margin-top: 100px;
    margin-left: 110px;

}

.content23 h1 {
    height: 116px;
    font-size: 96px;
    font-weight: 400;
    line-height: 116.16px;
    text-align: center;
    color: #EEEEEE;
    padding-top: 45px;
    z-index: 1;
    position: relative;

}

.content23 p {
    width: 408px;
    height: 117px;
    font-size: 32px;
    font-weight: 400;
    line-height: 38.72px;
    text-align: center;
    color: #EEEEEE;
    margin-left: 362px;
    z-index: 1;
    position: relative;
}

.content23 button {
    text-align: center;
    margin-left: 430px;
    width: 300px;
    height: 80px;
    border-radius: 20px;
    font-size: 26px;
    font-weight: 400;
    line-height: 31.46px;
    border: none;
    margin-top: 20px;
    z-index: 1;
    position: relative;
}

.pexel {
    margin-top: -538px;
    margin-left: 110px;
    margin-bottom: 30px;
    z-index: -1;
}

/*style du footer*/
footer {
    background: #000000;
    height: 270px;
}

footer img {
    margin-top: 90px;
    margin-left: 110px;
}

footer ul {
    display: flex;
    gap: 2rem;
    margin-left: 625px;
    margin-top: 100px;
}

footer li {
    list-style: none;
}

footer a {
    text-decoration: none;
    color: #ffffff;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;

}

footer p {
    color: #FFFFFF;
    margin-top: 50px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    width: 357px;
    height: 21px;
    margin-left: 500px;
}
</style>
