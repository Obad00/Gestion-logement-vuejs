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
  /* Incluez votre CSS ici ou importez-le */
  @import '@/styles/propos.css';
</style>
  