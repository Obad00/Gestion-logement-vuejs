<template>
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="logement.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>

<body>
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
        <section>
            <div class="sect13">
                <h1>Les logements</h1>
                <div class="content13">
                    <div class="part">
                        <div class="search-container">
                            <input type="text" class="search-input">
                            <i class="fas fa-search search-icon"></i>
                        </div>
                        <div class="type">

                            <div class="choix">
                                <h4>Types</h4>
                                <input type="checkbox" id="make-choice" required>
                                <label for="make-choice">location</label>
                                <span class="checkbox-custom"></span>
                                <br>
                                <input type="checkbox" id="make-choice" required>
                                <label for="make-choice">vente</label>
                                <span class="checkbox-custom"></span>
                            </div>

                            <div class="choix">
                                <h4>Type de propriété</h4>
                                <input type="checkbox" id="make-choice" required>
                                <label for="make-choice">appartements</label>
                                <br>
                                <input type="checkbox" id="make-choice" required>
                                <label for="make-choice">maisons</label>
                            </div>

                            <div class="choix">
                                <h4>Ville</h4>
                                <input type="checkbox" id="make-choice" required>
                                <label for="make-choice">Dakar</label>
                                <br>
                                <input type="checkbox" id="make-choice" required>
                                <label for="make-choice">Pikine</label>
                                <br>
                                <input type="checkbox" id="make-choice" required>
                                <label for="make-choice">Diamnadio</label>
                            </div>

                            <div class="choix">
                                <h4>Quartier ou zone</h4>
                                <input type="checkbox" id="make-choice" required>
                                <label for="make-choice">Ouakam</label>
                                <br>
                                <input type="checkbox" id="make-choice" required>
                                <label for="make-choice">Sacré coeur</label>
                                <br>
                                <input type="checkbox" id="make-choice" required>
                                <label for="make-choice">almadies</label>
                            </div>

                        </div>
                        <button>Appliquer les filtres</button>
                    </div>
                    <hr>
                    <div class="grille1">
                        <div><img src="@/assets/image/casa.png" alt=""></div>
                        <div><img src="@/assets/image/casa.png" alt=""></div>
                        <div><img src="@/assets/image/casa.png" alt=""></div>
                        <div><img src="@/assets/image/casa.png" alt=""></div>
                        <div><img src="@/assets/image/casa.png" alt=""></div>
                        <div><img src="@/assets/image/casa.png" alt=""></div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="sect2">
                <h1>Témoignages</h1>
                <img class="traits" src="@/assets/image/Group 52.png" alt="">
                <div class="grille2">
                    <div class="card">
                        <img src="@/assets/image/pexels-andrea-piacquadio-774909.png" alt="">
                        <div class="content23">
                            <h3>Paula Maria</h3>
    
                            <p>Este es un testimonio con texto de relleno para rellenar, y hay mas.....</p>
                        </div>
    
                    </div>
                    <div class="card">
                        <img src="@/assets/image/pexels-pixabay-220453.png" alt="">
                        <div class="content23">
                            <h3>Paula Maria</h3>
    
                            <p>Este es un testimonio con texto de relleno para rellenar, y hay mas.....</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="@/assets/image/pexels-pixabay-415829.png" alt="">
                        <div class="content23">
                            <h3>Paula Maria</h3>
    
                            <p>Este es un testimonio con texto de relleno para rellenar, y hay mas.....</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="@/assets/image/pexels-george-dolgikh-giftpunditscom-1310522.png" alt="">
                        <div class="content23">
                            <h3>Paula Maria</h3>
    
                            <p>Este es un testimonio con texto de relleno para rellenar, y hay mas.....</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="@/assets/image/pexels-sandeep-singh-10731423.png" alt="">
                        <div class="content23">
                            <h3>Paula Maria</h3>
    
                            <p>Este es un testimonio con texto de relleno para rellenar, y hay mas.....</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="@/assets/image/pexels-tuấn-kiệt-jr-1382731.png" alt="">
                        <div class="content23">
                            <h3>Paula Maria</h3>
    
                            <p>Este es un testimonio con texto de relleno para rellenar, y hay mas.....</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="@/assets/image/pexels-chloe-1043471.png" alt="">
                        <div class="content23">
                            <h3>Paula Maria</h3>
    
                            <p>Este es un testimonio con texto de relleno para rellenar, y hay mas.....</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="@/assets/image/pexels-sandeep-singh-10731423.png" alt="">
                        <div class="content23">
                            <h3>Paula Maria</h3>
    
                            <p>Este es un testimonio con texto de relleno para rellenar, y hay mas.....</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="sct33">
            <div class="content33">
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
        <p>© 2024 Hauss. Tous droits réservés.</p>
    </footer>
</body>

</html>
</template>

<script>
export default {
  name: 'LogementComponent',
  // Add your component logic if needed
}
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

/*section1*/
.sect13 h1 {
    width: 410px;
    height: 72px;
    font-size: 48px;
    font-weight: 400;
    line-height: 72px;
    margin-left: 360px;
    margin-top: 60px;

}

.content13 {
    display: flex;
}

.part {
    margin: 50px -140px 300px 110px;
}

.search-container {
    position: relative;
}

.search-input {
    padding: 10px 40px 10px 20px;
    /* Ajuster le padding pour faire de la place à l'icône */
    background: #D9D9D9;
    border: none;
    border-radius: 25px;
    width: 170px;
    /* Ajuster la largeur selon vos besoins */
    height: 25px;
}

.search-icon {
    position: absolute;
    left: 10px;
    /* Position de l'icône */
    top: 50%;
    transform: translateY(-50%);
    /* Centrer verticalement */
    color: #aaaaaa;
    /* Couleur de l'icône */
    pointer-events: none;
    /* L'icône ne doit pas capturer les clics */
}

.sect13 hr {
    width: 2px;
    /* Épaisseur de la ligne */
    height: 700px;
    /* Longueur de la ligne */
    background-color: #D9D9D9;
    /* Couleur de la ligne */
    border: none;
    /* Supprime les bordures par défaut */
    margin: 50px 0 0 155px;
}

.type {
    margin-top: 23px;
    display: block;
    margin-bottom: 20px;
}

.choix {
    margin-bottom: 20px;
}

.choix h4 {
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
}

.choix label {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
}

.choix input {
    margin-left: 20px;
}

.part button {
    background: #EB9655;
    width: 242px;
    height: 50px;
    border-radius: 10px 0px 10px 0px;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.04px;
    text-align: left;

    text-align: center;
    border: none;
}

.grille1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(-70px, 1fr));
    margin-top: 100px;
    margin-left: 25px;
}

.grille img {
    padding: 10px;
}

/*section2*/
.sect23{
    margin: 60px 0 120px 0;
    background: #EEEEEE;
    height: 550px;
}
.sect23 h1{
    font-family: Fredoka;
font-size: 48px;
font-weight: 400;
line-height: 58.08px;
text-align: left;
color: #356F37;
padding-left: 115px;
padding-top: 75px;


}
.traits{
margin-top: -100px;
}
.grille2 {
   
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(-70px, 1fr));
    gap: 30px;
    
}

.card {
    display: flex;
    box-shadow: 2px 2px 50px 0px #0066FF40;
    width: 360px;
    height: 110px;
    top: 194px;
    left: 52px;
    gap: 0px;
    border-radius: 10px 0px 10px 0px;
    background: #ffffff;
  margin-top: 40px;
}
.card img{
    width: 60px;
height: 60px;
margin-top: 25px;
margin-left: 15px;
}
.content23 h3{
font-size: 20px;
font-weight: 400;
line-height: 24.2px;
text-align: left;
color: #333333;
margin-top: 25px;
margin-left: 10px;
}
.content23 p{
    width: 250px;
height: 38px;
font-size: 16px;
font-weight: 400;
line-height: 19.36px;
text-align: left;
color: #555555;
margin-left: 10px;
}
/*section3*/
.content33 {
    width: 1120px;
    height: 420px;
    border-radius: 20px;
    background: #356F37;
    margin-top: 100px;
    margin-left: 110px;

}

.content33 h1 {
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

.content33 p {
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

.content33 button {
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
}</style>
