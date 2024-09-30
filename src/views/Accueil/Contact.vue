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
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Support</a></li>
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
  /* Votre style ici */
  @import '@/styles/contact.css';

  </style>
  