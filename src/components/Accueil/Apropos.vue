<template>
    <div>
      <header style="height: 90px;">
        <nav>
          <a href="#"><img src="@/assets/image/logo.png" alt="#"
              style="margin-top: 20px; margin-left: 95px; position: relative; z-index: 1;"></a>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/apropos">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Services</a></li>
          </ul>
          <div class="btn">
            <button class="btn1" style="width: 86px; height: 24px;">Connexion</button>
            <button class="btn2" style="width: 133px; height: 40px;">Inscription</button>
          </div>
        </nav>
      </header>
  
      <main>
        <section>
          <div class="sect1" style="display: flex;">
            <div><img src="@/assets/image/Content Image large.png" alt=""></div>
            <div style="margin-top: 30px; margin-left: -30px;">
              <hr>
              <h1>Vous êtes entre de bonnes mains</h1>
              <p>
                Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se
                repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt
                hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
              </p>
              <button>Pourquoi nous ?<img src="@/assets/image/keyboard-arrow-right.png" alt=""></button>
            </div>
          </div>
        </section>
  
        <section id="section2">
          <h1>Conseillers</h1>
          <div class="sect22">
            <div class="content22">
              <div class="content12">
                <h5>Comptable immobilier</h5>
                <p>Adama DABO</p>
                <button>Contacter</button>
                <a href=""><img src="@/assets/image/akar-icons_linkedin-box-fill.png" alt=""></a>
              </div>
            </div>
            <div class="content22">
              <div class="content12">
                <h5>Comptable immobilier</h5>
                <p>Khalilou DABO</p>
                <button>Contacter</button>
                <a href=""><img src="@/assets/image/akar-icons_linkedin-box-fill.png" alt=""></a>
              </div>
            </div>
            <div class="content22">
              <div class="content12">
                <h5>Comptable immobilier</h5>
                <p>Aladji DABO</p>
                <button>Contacter</button>
                <a href=""><img src="@/assets/image/akar-icons_linkedin-box-fill.png" alt=""></a>
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <div class="sect3">
            <div>
                <div class="une">1</div>
            <div class="content2">
              <h4>Texte de remplissage</h4>
              <p>
                Il s'agit d'un texte de remplissage, destiné à combler les espaces où le texte que les clients
                souhaitent inclure devrait être inséré.
              </p>
            </div>
             <img class="line1" src="@/assets/image/Line 7.png" alt="">

            </div>

            <div class="deux">
                <div class="une">2</div>
            <div class="content2">
              <h4>Texte de remplissage</h4>
              <p>
                Il s'agit d'un texte de remplissage, destiné à combler les espaces où le texte que les clients
                souhaitent inclure devrait être inséré.
              </p>
            </div>
                        <img class="line1" src="@/assets/image/Line 7.png" alt="">

            </div>

            <div class="trois">
                <div class="une">3</div>
            <div class="content2">
              <h4>Texte de remplissage</h4>
              <p>
                Il s'agit d'un texte de remplissage, destiné à combler les espaces où le texte que les clients
                souhaitent inclure devrait être inséré.
              </p>
            </div>

            </div>
           
          </div>
        </section>
  
        <section class="sect4">
          <h1>Nos partenaires</h1>
          <div>
            <img src="@/assets/image/Link → b1.png.png" alt="">
            <img src="@/assets/image/Link → b1.png.png" alt="">
            <img src="@/assets/image/Link → b1.png.png" alt="">
            <img src="@/assets/image/Link → b1.png.png" alt="">
            <img src="@/assets/image/Link → b1.png.png" alt="">
            <img src="@/assets/image/Link → b1.png.png" alt="">
          </div>
        </section>
  
        <section class="sct5">
          <div class="content3">
            <h1>Contactez-nous</h1>
            <p>Vous ne trouvez pas ce que vous cherchez ? Nous pouvons vous aider.</p>
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
    </div>
  </template>
  
  <script>
  export default {
    name: 'AproposComponent' // Renommer le composant ici
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
    margin-left: 500px;
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
    margin-top: 30px;
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
/* Base Styles - Desktop */
.sect1 {
    margin-top: 50px;
    display: flex;
    margin-left: 140px;
    gap: 20px;
}

.sect1 img {
    max-width: 100%; /* Ensures the image doesn’t exceed its container */
    height: auto;
}

.sect1 hr {
    width: 160px;
    height: 2.5px;
    border-radius: 5px;
    background: linear-gradient(90deg, #356F37 0%, #000000 94.96%);
}

.sect1 h1 {
    width: 490px;
    font-size: 32px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: -1.25px;
    text-align: left;
}

.sect1 p {
    width: 512px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: rgb(163, 163, 163);
}

.sect1 button {
    width: 216px;
    height: 63px;
    margin-top: 30px;
    font-size: 17px;
    font-weight: 400;
    line-height: 25.5px;
    background: #000;
    color: #fff;
    border-radius: 0 20px 0 0;
    text-align: center;
}

.sect1 button img {
    width: 20px;
    margin-left: 10px;
    color: #EB9655;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .sect1 {
        flex-direction: column;
        margin-left: 20px;
        text-align: center;
    }

    .sect1 img {
        width: 80%; /* Adjusts image size for smaller screens */
        margin: 0 auto;
    }
    
    .sect1 hr {
        width: 100px;
        margin: 0 auto;
        margin-top: -40px;
    }

    .sect1 h1 {
        font-size: 24px;
        line-height: 36px;
        width: 100%;
        text-align: center;
    }

    .sect1 p {
        font-size: 16px;
        line-height: 24px;
        width: 100%;
    }

    .sect1 button {
        width: 200px;
        height: 50px;
        font-size: 16px;
        margin-bottom: 100px;
    }
}

/* Desktop Styles - Unchanged */
#section2 h1 {
    width: 236px;
    height: 46.69px;
    font-size: 48px;
    font-weight: 400;
    line-height: 58.08px;
    margin-left: 115px;
    margin-top: -65px;
}

.sect22 {
    display: flex;
    gap: 20px;
    height: 560px;
    padding: 0px 119px 44px 119px;
    margin-top: 30px;
    justify-content: center;
}

.content22 {
    width: 360px;
    height: 340px;
    background-image: url(@/assets/image/pexels-teddy-joseph-2955375\ 1.png);
    background-size: cover;
}

.content12 {
    background: #333333;
    width: 285px;
    height: 152.95px;
    margin-top: 270px;
}

.content12 h5 {
    padding-top: 20px;
    padding-left: 25px;
    width: 159px;
    height: 15.29px;
    font-weight: 400;
    line-height: 19.36px;
    color: #EB9655;
}

.content12 p {
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    width: 164px;
    height: 19.32px;
    padding: 20px;
    padding-left: 25px;
}

.content12 button {
    width: 120px;
    height: 32.2px;
    border-radius: 10px 0px 10px 0px;
    border: none;
    background: #EB9655;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
    text-align: center;
    margin-left: 25px;
}

.content22 a img {
    margin-left: 70px;
}

/* Responsive Styles */
@media (max-width: 768px) {
    /* Stack cards vertically on tablets and adjust padding */
    .sect22 {
        flex-direction: column;
        align-items: center;
        height: auto;
        padding: 0 50px;
        padding: 50px;
        margin-bottom: 150px;
    }

    /* Resize content box */
    .content22 {
        width: 90%;
        height: 300px;
        background-size: cover;
    }

    .content12 {
        width: 90%;
        margin-top: 210px;
        height: auto;
    }

    /* Adjust typography */
    #section2 h1 {
        font-size: 36px;
        margin-left: 0;
    }

    .content12 h5 {
        font-size: 18px;
    }

    .content12 p {
        font-size: 16px;
    }

    .content12 button {
        width: 100px;
        font-size: 16px;
    }
}

@media (max-width: 480px) {
    /* Further adjust for small mobile screens */
    #section2 h1 {
        font-size: 28px;
        text-align: center;
        margin-left: 0;
    }

    .content12 h5,
    .content12 p,
    .content12 button {
        font-size: 14px;
        padding: 10px;
    }

}

/*section3*/
.sect3 {
    height: 450px;
    padding: 66.18px 0px 65.82px 240px;
    background: #356F37;
    margin-top: -140px;
    display: flex;
    padding-left: 350px;
}

.une {
    background: #EB9655;
    width: 100px;
    height: 300px;
    color: #ffffff;
    text-align: center;
    font-size: 110px;
    font-style: italic;
    font-weight: 500;
    line-height: 128.91px;
    text-align: center;
    position: absolute;
}

.line1 {
    width: 6px;
    height: 300px;
    margin-left: 350px;
}

.deux {
    background: #EB9655;
    width: 100px;
    height: 300px;
    color: #ffffff;
    text-align: center;
    font-size: 110px;
    font-style: italic;
    font-weight: 500;
    line-height: 128.91px;
    text-align: center;
    margin-top: 30px;
    margin-left: 440px;
    position: absolute;
}

.line2 {
    width: 6px;
    height: 300px;
    margin-left: 430px;
    margin-top: 70px;
}

.trois {
    background: #EB9655;
    width: 100px;
    height: 300px;
    color: #ffffff;
    text-align: center;
    font-size: 110px;
    font-style: italic;
    font-weight: 500;
    line-height: 128.91px;
    margin-top: 70px;
    margin-left: 900px;
    position: absolute;

}

.content2 {
    width: 250px;
    height: 110px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
    text-align: left;
    color: #EEEEEE;
    position: absolute;
    margin-top: 200px;
    margin-left: 23px;
}

.content2 h4 {
    width: 250px;
    height: 29px;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.04px;
    color: #FFFFFF;
}

.content2 p {
    margin-top: 40px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
    width: 250px;
    height: 110px;
    color: #EEEEEE;

}



/* Base Styles */
.sect4 {
    height: 200px;
    justify-content: center;
}

.sect4 h1 {
    font-size: 48px;
    font-weight: 400;
    line-height: 58.08px;
    margin-left: 130px;
    margin-top: 15px;
}

.sect4 div {
    display: flex;
    gap: 120px;
    margin-top: 50px;
    width: 300px;
    margin-left: 250px;
}

/* Responsive Styles */
@media (max-width: 1200px) {
    .sect4 h1 {
        font-size: 36px;
        margin-left: 80px;
        text-align: center;
    }

    .sect4 div {
        margin-left: 100px;
    }
}

@media (max-width: 768px) {
    .sect4 h1 {
        font-size: 28px;
        margin-left: 0;
        text-align: center;
    }

    .sect4 div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 20px;
        margin-top: 20px;
        margin-left: 80;
        width: 60%;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .sect4 h1 {
        font-size: 24px;
        line-height: 1.2;
    }

    .sect4 div {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 10px;
    }

    .sect4 div img {
        width: 100%;
        max-width: 80px; /* Adjust as needed */
    }
}

/* Base Styles */
.sct5 {
    justify-content: center;
    margin-left: 180px;
}

.content3 {
    width: 1120px;
    height: 420px;
    border-radius: 20px;
    background: #356F37;
    margin-left: 110px;
}

.content3 h1 {
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

.content3 p {
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

.content3 button {
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

/* Responsive Styles */
@media (max-width: 1200px) {
    .content3 {
        width: 90%;
    }

    .content3 h1 {
        font-size: 64px;
        padding-top: 30px;
    }

    .content3 p {
        width: 70%;
        margin-left: 15%;
        font-size: 24px;
    }

    .content3 button {
        margin-left: calc(50% - 150px);
        width: 250px;
        height: 60px;
        font-size: 22px;
    }

    .pexel {
        margin-top: -400px;
        margin-left: 5%;
    }
}

@media (max-width: 768px) {

  .sct5 {
    justify-content: center;
}

    .content3 {
        width: 100%;
        height: auto;
        margin-left: 0;
        padding: 20px;
    }

    .content3 h1 {
        font-size: 48px;
    }

    .content3 p {
        width: 100%;
        margin-left: 0;
        font-size: 18px;
    }

    .content3 button {
        margin-left: calc(50% - 100px);
        width: 250px;
        height: 50px;
        font-size: 18px;
    }

    /* Hide images on smaller screens */
    .pexel {
        display: none;
    }
}

@media (max-width: 480px) {

  .sct5 {
    margin-left: -5px;
    padding: 10px;
}

.content3 {
padding: 5px;  
  }

    .content3 h1 {
        font-size: 32px;
    }

    .content3 p {
        font-size: 16px;
    }

    .content3 button {
        width: 200px;
        height: 40px;
        font-size: 16px;
        margin-bottom: 15px;
    }
}


/*style du footer*/
footer {
    background: #000000;
    height: 270px;
}

footer .footer-top {
    display: flex;
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

@media (max-width: 768px) {
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #000000;
        height: 430px;
    }
    footer .footer-top {
        height: auto;
        display: flex;
        flex-direction: column;
    }
    footer ul {
        flex-direction: column;
        align-items: center;
        margin-left: 0;
        margin-top: 0px;
    }
    footer p {
        color: #ffffff;
        text-align: center;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        margin-left: 0px;
    }
    footer img {
        margin-top: 40px;
        margin-bottom: 40px;
        margin-left: 0px;
    }
}
</style>
  