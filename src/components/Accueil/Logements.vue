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
/* Scoped styles for your component */
@import '@/styles/logements.css'; /* If you need external styles for specific housing section */

/* Add component-specific styles here */
</style>
