<template>
    <div>
      <header style="height: 90px;">
        <nav>
          <a href="#">
            <img src="@/assets/image/logo.png" alt="Logo" style="margin-top: 20px; margin-left: 95px; position: relative; z-index: 1;">
          </a>
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
          <div class="sect0">
            <h1>Renseignez-vous !</h1>
            <div class="content1" style="position: relative; z-index: -1;">
              <img src="@/assets/image/pexels-kaique-rocha-65438 1.png" alt="" style="position: relative; z-index: 1;">
              <div class="besoin">
                <h2>Vos besoins..?</h2>
                <input type="email" id="email" name="email" required placeholder="Email...">
                <textarea id="message" name="message" rows="6" required placeholder="Message..."></textarea>
                <button>Envoyer</button>
              </div>
            </div>
          </div>
        </section>
        <section>
            <div class="sect9">
            <h1>Nos services</h1>
            <div class="container">
                <div class="content9">
                    <img src="@/assets/image/icon-park-outline_chess-one.png" alt="">
                    <h6>Texte de remplissage</h6>
                    <p>Il s'agit d'un texte de remplissage, destiné à combler
                         les espaces où le texte que les clients souhaitent inclure devrait être inséré.</p>
                </div>
                <div class="content9">
                    <img src="@/assets/image/icon-park-outline_chess-one.png" alt="">
                    <h6>Texte de remplissage</h6>
                    <p>Il s'agit d'un texte de remplissage, destiné à combler
                         les espaces où le texte que les clients souhaitent inclure devrait être inséré.</p>
                </div>
                <div class="content9">
                    <img src="@/assets/image/icon-park-outline_chess-one.png" alt="">
                    <h6>Texte de remplissage</h6>
                    <p>Il s'agit d'un texte de remplissage, destiné à combler
                         les espaces où le texte que les clients souhaitent inclure devrait être inséré.</p>
                </div>
                <div class="content9">
                    <img src="@/assets/image/icon-park-outline_chess-one.png" alt="">
                    <h6>Texte de remplissage</h6>
                    <p>Il s'agit d'un texte de remplissage, destiné à combler
                         les espaces où le texte que les clients souhaitent inclure devrait être inséré.</p>
                </div>
                <div class="content9">
                    <img src="@/assets/image/icon-park-outline_chess-one.png" alt="">
                    <h6>Texte de remplissage</h6>
                    <p>Il s'agit d'un texte de remplissage, destiné à combler
                         les espaces où le texte que les clients souhaitent inclure devrait être inséré.</p>
                </div>
                <div class="content9">
                    <img src="@/assets/image/icon-park-outline_chess-one.png" alt="">
                    <h6>Texte de remplissage</h6>
                    <p>Il s'agit d'un texte de remplissage, destiné à combler
                         les espaces où le texte que les clients souhaitent inclure devrait être inséré.</p>
                </div>
              
            </div>
           
        </div>
        </section>
      </main>
      <footer>
        <div style="display: flex;">
          <a href="#"><img src="@/assets/image/logo.png" alt="Logo"></a>
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
    name: 'NomDeVotreComposant',
    // Votre logique JavaScript ici
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

/*style du main*/
/*section1*/
.sect0 h1 {
    width: 429px;
    height: 107px;
    border-radius: 0px 1px 20px 0px;
    background: #EB9655;
    font-size: 46px;
    font-weight: 400;
    line-height: 58.08px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 30px;
}

.content1 {
    width: 840px;
    height: 550px;
    background: #000000;
    margin-left: 470px;
    margin-top: 30px;
    margin-bottom: 70px;
    margin-top: 120px;
}

.content1 img {
    margin-left: -280px;
    margin-top: -30px;
    width: 400px;
    height: 510px;
    border-radius: 0 0 30px 0;
}

.besoin {
    width: 580px;
    height: 445px;
    background: #FFFFFF;
    margin-left: 200px;
    border-radius: 5px;
    margin-top: -488px;
}

.besoin h2 {
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
    padding: 5px;
}

.besoin textarea {
    background: #C4C4C4;
    border: none;
    width: 485px;
    height: 75px;
    margin-top: 15px;
    margin-left: 50px;
    padding: 5px;
}

.besoin button {
    background: #EB9655;
    width: 495px;
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

/*section2*/
.sect9 {
    background: #356F37;
    padding: 10px;
}

.sect9 h1 {

    padding-top: 70px;
    font-size: 48px;
    font-weight: 400;
    line-height: 58.08px;
    margin-left: 110px;
    color: #FFFFFF;
}

.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(-70px, 1fr));
    gap: 20px;
    margin: 45px 110px 45px 110px;
}

.content9 {
    width: 365px;
    height: 365px;
    top: 172px;
    left: 120px;
    gap: 0px;
    border-radius: 20px;
    opacity: 0px;
    background: #EDEDED;
    transition: 1s;
}

.content9 img {
    margin-top: 50px;
    margin-left: 40px;
}

.content9 h6 {
    margin-top: 30px;
    margin-left: 40px;
    font-size: 30px;
    font-weight: 400;
    line-height: 38.72px;
    text-align: left;
}

.container p {
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    text-align: left;
    color: #666666;
    margin-left: 40px;
    margin-top: 30px;
    transition: 0.5s;
    background-color: transparent;
}
.content9:hover{
background: #EB9655;
color: #FFFFFF;
}
.content9:hover p {
    color: #FFFFFF;
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
}  </style>
  