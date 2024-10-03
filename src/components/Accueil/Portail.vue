<template>
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
        <!-- <link rel="stylesheet" href="portail.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>

<body>

    <header>
        <nav>
            <a href="#"><img src="@/assets/image/logo.png" alt="#"
                    style="margin-top: 30px; margin-left: 95px;position: relative;z-index: 1;"></a>
            <ul>
                <li><a href="/">Acceuil</a></li>
                <li><a href="/apropos">A propos</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/contact">Services</a></li>
            </ul>
            <div class="btn">
                <button class="btn1" style="width: 86px; height: 24px;"><a href="/login">connexion</a></button>
                <button class="btn2" style="width: 133px; height: 40px;"><a href="/register">inscription</a></button>
            </div>
        </nav>
        <div class="banner">
            <div>
                <div class="text">
                    <h1>Trouvez votre chez-vous <br> en toute simplicité, au cœur du Sénégal</h1>
                <p>Sur <strong>HAUSS,</strong><br>
                    votre solution simple et rapide pour trouver et
                    gérer des logements au Sénégal. Que vous soyez étudiant, expatrié, ou résident local,
                    découvrez des options adaptées à vos besoins avec une interface intuitive et sécurisée.</p>
                <button class="btn3"><span>publier une annonce</span></button>
                <button class="prev1"><i class="fas fa-chevron-right"></i></button>
                </div>
                
                <div class="rafetal"><img class="layer" src="@/assets/image/Layer_x0020_1.png" alt="" ></div>

            </div>

            <div class="image">
                <img class="grp7" src="@/assets/image/Group 7.png" alt="#">
            </div>
        </div>
    </header>

    <main style="background: #F3FFF4; padding-top: 100px;">
        <section class="section1">
            <div style="text-align:center;justify-content: center;">
                <h1>Nos services</h1>
                <span>Votre futur logement commence ici</span>
            </div>
            <div class="service">
                <div class="srvc">
                    <div class="imgsrvc">
                        <img src="@/assets/image/house 1.png" alt="">
                    </div>
                    <h3>Achat Maison/Appartement</h3>
                    <p>Rumah impian kini jadi kenyataan, Beli
                        rumah bary dengan fasilitas terbaik
                        dengan lingkungan yang nyaman.</p>
                </div>
                <div class="srvc">
                    <div class="imgsrvc">
                        <img src="@/assets/image/assets 1.png" alt="" style="padding-top: 10px;">
                    </div>
                    <h3>Location appartement</h3>
                    <p>Sewa rumah yang indah untuk keluarga
                        anda, pilihan terbaik untuk tempat
                        tinggal keluarga mu.</p>
                </div>
                <div class="srvc">
                    <div class="imgsrvc">
                        <img src="@/assets/image/town 1.png" alt="" style="padding-top: 10px;">
                    </div>
                    <h3>Location maison</h3>
                    <p>Beli Rumah sempurna dengan harga
                        terbaik kualitas terjamin dari sumber
                        terpercaya</p>
                </div>
            </div>
        </section>

        <section class="section2"
            style="background-image: url(@/assets/image/green-interior-modern-interior-living-room-style-with-soft-sofa-green-wall-3d-rendering.png);background-size: cover; background-position: center;background-position:top;height: 700px; background-repeat: no-repeat;">
            <h1>Le logement idéal, à portée de clic.</h1>
            <p>Logements adaptés à vos besoins, en un instant.</p>
        </section>
        <section class="section3">
            <h1>Jéggi sa kër ci sunugal bu baax</h1>
            <div class="sect03">
                <div class="house">
                    <img src="@/assets/image/image 15.png" alt="">
                    <div style="display: block;">
                        <span>200.000F</span>
                        <br>
                        <span > Mbour</span>
                        <br>
                        <span>A louer</span>
                    </div>
                    <div style="display: flex;">
                        <img src="@/assets/image/mdi_bed.png" alt="">3
                        
                        <span>chambre</span>
                        <img src="@/assets/image/fluent_globe-surface-20-filled.png" alt="">4
                        
                        <span>Toilettes</span>
                        <img src="@/assets/image/fa-solid_bath.png" alt="">360m
                        
                        <span>surfaces</span>
                    </div>
                </div>
                <div class="house">
                    <img src="@/assets/image/Mask Group.png" alt="">
                    <div style="display: block;">
                        <span>200.000F</span>
                        <br>
                        <span> Diamnadio</span>
                        <br>
                        <span>A louer</span>
                    </div>
                    <div style="display: flex;">
                        <img src="@/assets/image/mdi_bed.png" alt="">
                        <br>
                        <span>chambre</span>
                        <img src="@/assets/image/fluent_globe-surface-20-filled.png" alt="">4
                        <br>
                        <span>Toilettes</span>
                        <img src="@/assets/image/fa-solid_bath.png" alt="">360m
                        <br>
                        <span>surfaces</span>
                    </div>
                </div>
                <div class="house">
                    <img src="@/assets/image/Mask Group (1).png" alt="">
                    <div style="display: block;">
                        <span>200.000F</span>
                        <br>
                        <span> Ouakam</span>
                        <br>
                        <span>A louer</span>
                    </div>
                    <div style="display: flex;">
                        <img src="@/assets/image/mdi_bed.png" alt="">3
                        <br>
                        <span>chambre</span>
                        <img src="@/assets/image/fluent_globe-surface-20-filled.png" alt="">4
                        <br>
                        <span>Toilettes</span>
                        <img src="@/assets/image/fa-solid_bath.png" alt="">360m
                        <br>
                        <span>surfaces</span>
                    </div>
                </div>
                <div class="house">
                    <img src="@/assets/image/Mask Group (2).png" alt="">
                    <div style="display: block;">
                        <span>200.000F</span>
                        <br>
                        <span> Mamalle, Ouakam</span>
                        <br>
                        <span>A louer</span>
                    </div>
                    <div style="display: flex;">
                        <img src="@/assets/image/mdi_bed.png" alt="">3
                        <br>
                        <span>chambre</span>
                        <img src="@/assets/image/fluent_globe-surface-20-filled.png" alt="">4
                        <br>
                        <span>Toilettes</span>
                        <img src="@/assets/image/fa-solid_bath.png" alt="">360m
                        <br>
                        <span>surfaces</span>
                    </div>
                </div>
                <div class="house">
                    <img src="@/assets/image/Mask Group (3).png" alt="">
                    <div style="display: block;">
                        <span>200.000F</span>
                        <br>
                        <span> Sacré coeur</span>
                        <br>
                        <span>A louer</span>
                    </div>
                    <div style="display: flex;">
                        <img src="@/assets/image/mdi_bed.png" alt="">3
                        <br>
                        <span>chambre</span>
                        <img src="@/assets/image/fluent_globe-surface-20-filled.png" alt="">4
                        <br>
                        <span>Toilettes</span>
                        <img src="@/assets/image/fa-solid_bath.png" alt="">360m
                        <br>
                        <span>surfaces</span>
                    </div>
                </div>
                <div class="house">
                    <img src="@/assets/image/Mask Group (4).png" alt="">
                    <div style="display: block;">
                        <span>200.000F</span>
                        <br>
                        <span> Dakar ville</span>
                        <br>
                        <span>A louer</span>
                    </div>
                    <div style="display: flex;">
                        <img src="@/assets/image/mdi_bed.png" alt="">3
                        <br>
                        <span>chambre</span>
                        <img src="@/assets/image/fluent_globe-surface-20-filled.png" alt="">4
                        <br>
                        <span>Toilettes</span>
                        <img src="@/assets/image/fa-solid_bath.png" alt="">360m
                        <br>
                        <span>surfaces</span>
                    </div>
                </div>
            </div>
            <button style="border: none;background: transparent;text-align: center;font-family: Poppins;
            font-size: 18px;
            font-weight: 400;
            line-height: 27px;
            text-align: center;
            margin-left: 640px;"><a href="/logements">voir plus..</a></button>
        </section>

        <section class="section4" style="height: 100vh;">
            <div class="deuk" style="display: flex;">
                <h1>KAAY DEUK...</h1>
                <button><a href="/logements">voir d'autres</a><i class="fas fa-chevron-right"
                        style="font-size: 15px;margin-left: 20px;"></i></button>
            </div>
            <div class="slider">
            <button class="prev"><i class="fas fa-chevron-left"></i></button>
            <div class="slide">
                <div class="item"><img src="@/assets/image/image 13.png" alt=""></div>
                <div class="item"><img src="@/assets/image/image 17.png" alt=""></div>
                <div class="item"><img src="@/assets/image/image 18.png" alt=""></div>
                <div class="item"><img src="@/assets/image/image 16.png" alt=""></div>
            </div>
            <button class="next"><i class="fas fa-chevron-right"></i></button>
        </div>
        </section>
        <section>
            <div class="section5" style="display: flex;">
                <div class="info">
                    <h1>Contactez-nous pour plus d'informaton !</h1>
                    <h4>Hauss</h4>
                    <img src="@/assets/image/Vector.png" alt=""> <span>Ouakam Cité Batrain</span>
                    <br> <br>
                    <img src="@/assets/image/Group.png" alt=""> <span>+221 77 142 52 49</span>
                    <br> <br>
                    <img src="@/assets/image/Vector (1).png" alt="" style="width: 25px;height: 25px;">
                    <span>Hauss@gmail.com</span>
                    <h3 class="rs">Réseaux sociaux</h3>
                    <img src="@/assets/image/Vector (2).png" alt="">
                    <img src="@/assets/image/Group (1).png" alt="" style="margin-left: 10px;">
                    <img src="@/assets/image/akar-icons_instagram-fill.png" alt="" style="margin-left: 10px;">
                </div>

                <div class="besoin">
                    <h1>Vos besoin..?</h1>
                    <label for="mail"></label>
                    <br>
                    <input type="email" id="email" name="email" required placeholder="Email...">
                    <br>
                    <label for="message"></label>
                    <textarea id="message" name="message" rows="6" required placeholder="Message..."></textarea>
                    <button>Envoyer</button>
                </div>
            </div>
        </section>
    </main>
    <hr style="background: #919291;">
    <footer>
        <div style="display: flex;">
            <a href=""><img src="@/assets/image/logo.png" alt=""></a>
            <ul>
                <li><a href="#">Acceuil</a></li>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
        <p>© 2024 Hauss. Tous droits réservés. Design par ADAMA DABO</p>
    </footer>
</body>

</html>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    height: 768px;
}
.banner{
    display: flex;
    align-items: top;
    justify-content: space-between;
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
    margin-top: 30px;
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
    margin-left: 300px;
    margin-top: 39px;
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

header h1 {
    margin-top: -630px;
    width: 666px;
    margin-left: 80px;
    font-size: 52px;
    font-weight: 700;
    line-height: 72px;
    text-align: left;
    color: #ffffff;

}

header p {
    width: 596px;
    height: 144px;

    margin-left: 80px;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: #ffffff;

}

.btn3 {
    width: 237px;
    height: 70px;
    margin-left: 80px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    color: #356F37;
    border: none;
    background-color: #ffffff;



}

.prev1 {
    background-color: transparent;
    border: none;
    width: 44px;
    height: 44px;
    padding: 9.11px 14.56px 9.16px 16.5px;
    color: #ffffff;
    font-size: 30px;
}

.layer {
    margin-top: -594px;
}

.image{
    display: flex;
    justify-content: end;
    margin-top: -39.2%;
}
.image img{
    width: 100%;
    height: 90%;
}
.text {
     position: relative; /* Position absolue pour superposer */
     top: 50%; 
     left: 0%;  
     z-index: 1; /* Assure que le texte est au-dessus de l'image */
}

.rafetal {
    display: block; /* Pour que l'image soit visible */
}

/*style du main*/
/*section1*/
.section1 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    margin-top: -60px;

}

.section1 h1 {
   
    font-size: 48px;
    font-weight: 600;
    line-height: 72px;
    text-align: center;
}

.section1 span {
    width: 321px;
    height: 27px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
}

.service {
    display: flex;
    padding-top: 50px;
    justify-content: center;
    text-align: center;
    gap: 20px;
}

.srvc {
    width: 330px;
    height: 280px;
    padding: 20px;
    border-radius: 5px 0px 0px 0px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 0px #00000040;
    transition: 1s;
}

.srvc:hover {
    background-color: #356F37;
    color: #ffffff;
}

.imgsrvc {
    margin-top: 10px;
    width: 75px;
    height: 75px;
    background-color: #356F37;
    border-radius: 50px;
    margin-left: 120px;
    margin-top: 30px;
}

.srvc:hover .imgsrvc {
    background-color: #ffffff;
}

.srvc h3 {
    color: #356F37;
    margin-top: 20px;
}

.srvc p {
    margin-top: 10px;
}

.srvc:hover h3 {
    color: #ffffff;
}

/*section2*/
.section2 {
    background-image: url('@/assets/image/green-interior-modern-interior-living-room-style-with-soft-sofa-green-wall-3d-rendering.png');
    background-size: cover;
    background-position: center;
    height: 700px;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    background: #00000033;
    margin-top: -250px;
}

.section2 h1 {
    
    font-size: 48px;
    font-weight: 600;
    line-height: 72px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 140px;

}

.section2 p {
    
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    color: #FFFFFF;
    
}

/*section3*/
.section3 {
    margin-bottom: 60px;
}

.section3 h1 {
    font-size: 48px;
    text-align: center;
    margin-top: 50px;
}

.sect03 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(-0px, 1fr));
    gap: 20px;
    place-items: center;
    margin: 20px 120px 50px 120px;
}

.house {
    width: 362px;
    height: 465px;
    top: 2449px;
    left: 93px;
    gap: 0px;
    opacity: 0px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #FFFFFF;

}

.house img {
    margin-top: 5px;
    margin-left: 5px;
}

/*section4*/
.section4 {
    height: 783px; 
    padding-bottom: 130px; 
}
.deuk h1{
    width: 306px;
height: 72px;
font-size: 48px;
font-weight: 600;
line-height: 72px;
text-align: center;
margin-left: 120px;
}
.deuk button{
    width: 238px;
height: 63px;
background: #EB9655;
color: #FFFFFF;
margin-left: 590px;
border: none;
margin-bottom: 60px;
}
.slider {
    position: relative;
    width: calc(3.5 * 340px); /* Ajuste pour afficher 3,5 images, coupant la 4ème au milieu */
    max-width: 1200px; /* Largeur maximale du conteneur */
    overflow: hidden; /* Cache l'excès de la dernière image */
    display: flex;
    align-items: center;
    margin-left: 120px; /* Aligne le slider à droite de l'écran */
    
   
}

.slide {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
}

.item {
    flex: 0 0 340px; 
    margin-right: 15px;
  
    
}

.item img {
    width: 100%; 
    height: 100%;
    object-fit: cover; 
    
}

button.prev, button.next {
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
   position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #EB9655;
    border: none;
    color: white;
    cursor: pointer;
}

button.prev {
    left: 10px;
}

button.next {
    right: 10px;
}

button i {
    color: #FFFFFF;
    font-size: 30px;
    
}
/*section5*/
.section5 {
    width: 100%;
    background: rgba(0, 0, 0, 0.7) url(@/assets/image/image_20.png);
    background-size: cover;
    background-position: center;
    background-position: bottom;
    height: 750px;
    background-repeat: no-repeat;
    background-blend-mode: darken;
}

.info h1 {
    width: 444px;
    height: 120px;
    font-family: Poppins;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    color: #FFFFFF;
    margin-left: 90px;
    margin-top: 180px;
}

.info h4 {
    width: 57px;
    height: 27px;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    margin-top: 30px;
    color: #FFFFFF;
    margin-left: 90px;
    margin-bottom: 20px;
}

.info img {
    margin-left: 90px;
}

.info span {
    color: #ffffff;

}

.rs {
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    text-align: left;
    color: #FFFFFF;
    margin-left: 90px;
    margin-top: 20px;
    height: 27px;
    width: 153px;
    margin-bottom: 20px;
}

.besoin {
    width: 580px;
    height: 445px;
    background: #FFFFFF;
    margin-top: 150px;
    margin-left: 170px;
    border-radius: 5px;

}

.besoin h1 {
    width: 287px;
    height: 60px;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    text-align: left;
    color: #EB9655;
    margin-left: 150px;
    margin-top: 50px;
}

.besoin input {
    background: #C4C4C4;
    border: none;
    width: 485px;
    height: 75px;
    margin-left: 50px;
}

.besoin textarea {
    background: #C4C4C4;
    border: none;
    width: 485px;
    height: 75px;
    margin-top: 15px;
    margin-left: 50px;
}

.besoin button {
    background: #EB9655;
    width: 485px;
    height: 75px;
    color: #FFFFFF;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    text-align: left;
    margin-left: 50px;
    border: none;
    margin-top: 10px;
    text-align: center;
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
   color: #ffffff;
    margin-top: 50px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    width: 357px;
    height: 21px;
    margin-left: 500px;
}

/* Responsive Design pour les petits écrans (téléphones) */
@media (max-width: 768px) {
    header {
        height: auto; /* Ajuste la hauteur pour s'adapter aux petits écrans */
    }

    .banner {
        flex-direction: column;
        align-items: center;
    }

    nav ul {
        flex-direction: column;
        margin-left: 0;
        margin-top: 0;
    }

    nav li {
        margin-top: 10px;
    }

    .btn {
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
    }

    header h1 {
        margin-top: 20px;
        width: 100%;
        font-size: 36px; /* Réduit la taille de la police pour petits écrans */
        margin-left: 0;
    }

    header p {
        width: 100%;
        margin-left: 0;
        font-size: 14px;
    }

    .btn3 {
        width: 80%;
        margin-left: 0;
    }

    .image {
        margin-top: 0;
    }

    /* Services */
    .service {
        flex-direction: column;
        gap: 10px;
    }

    .srvc {
        width: 90%;
        margin: 0 auto;
    }

    /* Sections */
    .section1 h1, .section2 h1, .section3 h1 {
        font-size: 32px;
        line-height: 48px;
    }

    .sect03 {
        grid-template-columns: 1fr;
        margin: 0 20px;
    }

    .house {
        width: 100%;
    }

    .slider {
        width: 100%;
        margin-left: 0;
    }

    .besoin {
        width: 90%;
        margin-left: 0;
    }

    footer ul {
        flex-direction: column;
        align-items: center;
        margin-left: 0;
    }
}

/* Responsive Design pour les tablettes */
@media (min-width: 768px) and (max-width: 1024px) {
    header {
        height: 600px;
    }

    nav ul {
        margin-left: 100px;
    }

    header h1 {
        font-size: 42px;
        margin-left: 20px;
    }

    header p {
        font-size: 16px;
        margin-left: 20px;
    }

    .btn3 {
        width: 50%;
    }

    .sect03 {
        grid-template-columns: 1fr 1fr;
        margin: 0 40px;
    }

    .besoin {
        width: 80%;
        margin-left: 10px;
    }

    footer ul {
        margin-left: 0px;
    }
}

</style>
