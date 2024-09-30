<template>
    <div>
      <header style="height: 90px;">
        <nav>
          <a href="#"><img src="image/logo.png" alt="#" style="margin-top: 20px; margin-left: 95px; position: relative; z-index: 1;"></a>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">A propos</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
          </ul>
          <div class="btn">
            <button class="btn1" style="width: 86px; height: 24px;">Connexion</button>
            <button class="btn2" style="width: 133px; height: 40px;">Inscription</button>
          </div>
        </nav>
      </header>
      <main>
        <!-- Section for housing search filters and results -->
        <section class="sect1">
          <h1>Les logements</h1>
          <div class="content1">
            <div class="search-part">
              <div class="search-container">
                <input type="text" class="search-input" />
                <i class="fas fa-search search-icon"></i>
              </div>
              <div class="filters">
                <!-- Filters for housing type, city, etc. -->
                <!-- Add unique IDs for checkboxes -->
                <div class="choix">
                  <h4>Types</h4>
                  <input type="checkbox" id="location" />
                  <label for="location">Location</label>
                  <br />
                  <input type="checkbox" id="vente" />
                  <label for="vente">Vente</label>
                </div>
  
                <div class="choix">
                  <h4>Type de propriété</h4>
                  <input type="checkbox" id="appartements" />
                  <label for="appartements">Appartements</label>
                  <br />
                  <input type="checkbox" id="maisons" />
                  <label for="maisons">Maisons</label>
                </div>
  
                <!-- Continue adding filters as needed -->
              </div>
              <button>Appliquer les filtres</button>
            </div>
            <hr />
            <!-- Grid of housing images -->
            <div class="grille1">
              <img src="image/casa.png" alt="House Image" />
              <img src="image/casa.png" alt="House Image" />
              <img src="image/casa.png" alt="House Image" />
              <!-- More grid items -->
            </div>
          </div>
        </section>
  
        <!-- Testimonials section -->
        <section class="sect2">
          <h1>Témoignages</h1>
          <img class="traits" src="image/Group 52.png" alt="Separator" />
          <div class="grille2">
            <div class="card">
              <img src="image/pexels-andrea-piacquadio-774909.png" alt="Person 1" />
              <div class="content2">
                <h3>Paula Maria</h3>
                <p>Este es un testimonio con texto de relleno para rellenar, y hay mas...</p>
              </div>
            </div>
            <!-- More cards -->
          </div>
        </section>
  
        <!-- Contact section -->
        <section class="sct3">
          <div class="content3">
            <h1>Contactez-nous</h1>
            <p>Vous ne trouvez pas ce que vous cherchez, nous pouvons vous aider</p>
            <button>Envoyer un message</button>
          </div>
          <div class="pexel">
            <img src="image/pexels-expect-best.png" alt="Contact image 1" />
            <img src="image/pexels-jared-lung.png" alt="Contact image 2" />
          </div>
        </section>
      </main>
  
      <!-- Footer -->
      <footer>
        <div style="display: flex;">
          <a href=""><img src="image/logo.png" alt="Logo" /></a>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">A propos</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <p>&copy; 2024 bg Creative Academy. All Rights Reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LogementComponent',
    // Add your component logic if needed
  }
  </script>
  
  <style scoped>
  /* Scoped styles for your component */
  @import '@/styles/logements.css'; /* If you need external styles for specific housing section */
  
  /* Add component-specific styles here */
  </style>
  