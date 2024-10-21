<template>
    <div>
      <section class="login-section">
    <div class="login-container">
        <div class="login-form-container">
            <h2 class="login-title">Bienvenue chez <img src="@/assets/image/Rectangle 87.png">!</h2>
            <p class="login-description">Vous n’avez pas de compte? <a href="/register">S’inscrire</a></p>

            <form action="" class="login-form" @submit.prevent="loginUser">

              <p>{{ message }}</p>


              <div  class="logo-im">
                <img
                 src="@/assets/image/Group 302 (1).svg"
                alt="login form image">

              </div>
              <label for="">Email</label>
              <input class="login-input" type="email" v-model="credentials.email" placeholder="Email" required>
                
                  <label for="">Mot de passe</label>
                  <input class="login-input" type="password" v-model="credentials.password" id="password" placeholder="Mot de passe" required>
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" id="togglePassword"
                        class="toggle-password" viewBox="0 0 16 16">
                        <path
                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z">
                        </path>
                        <path
                            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z">
                        </path>
                    </svg> -->
                
                <div class="forgot-password">Mot de passe oublié?</div>

                <button class="login-button" type="submit">Se connecter</button>
            </form>

            <div class="or-separator">
                <hr>
                <p>Ou</p>
                <hr>
            </div>
            <div class="ou">
              <p>Se connecter avec </p>

             <div>
              <button class="google-login-button">
                <svg class="google-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                    <path fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                    </path>
                    <path fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                    </path>
                    <path fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                    </path>
                    <path fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                    </path>
                </svg>
                Google
            </button>
             </div>

            </div>

            

            
        </div>
        <div class="login-image-container">
            <img class="login-image"
                 src="@/assets/image/Group 12969.png"
                alt="login form image">

                <img class="logo-image"
                 src="@/assets/image/logo.svg"
                alt="login form image">

                <div class="ou">
                      <p>HAUSS</p>
                </div>

                <div class="ou">
                      <p>Le logement idéal, à portée de clic.</p>
                      <img class="login-imag"
                 src="@/assets/image/Group 301.png"
                alt="login form image">
                </div>

           
        </div>
    </div>
</section>

    </div>
  </template>

  <style scoped>
  @import '@/styles/login.css';
</style>
  
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
      message: '',
    };
  },
  methods: {
    async loginUser() {
  try {
    const response = await axios.post('http://localhost:8081/auth/login', this.credentials);
    console.log(response);
    
    localStorage.setItem('token', response.data.token); // Stocker le JWT
    this.message = "Connexion réussie!";

    // Afficher une modale de succès pour la connexion réussie
    Swal.fire({
      title: 'Succès',
      text: 'Vous êtes connecté avec succès !',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    // Vérifier le rôle de l'utilisateur et rediriger en conséquence
    const userRole = response.data.role; // Accéder correctement au rôle depuis les données de la réponse

    if (userRole === 'ADMIN') {
      this.$router.push({ name: 'DashboardAdmin' }); // Rediriger vers le tableau de bord admin
    } else if (userRole === 'PROPRIETAIRE') {
      this.$router.push({ name: 'AccueilProprietaire' }); // Rediriger vers LogementList
    } else if (userRole === 'LOCATAIRE') {
      this.$router.push({ name: 'Locataire' }); // Rediriger vers Accueillocataire
    } else {
      this.message = "Rôle d'utilisateur non reconnu.";
      // Afficher une modale pour un rôle non reconnu
      Swal.fire({
        title: 'Avertissement',
        text: 'Rôle d\'utilisateur non reconnu.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  } catch (error) {
    this.message = error.response.data; // Gérer les erreurs
    // Afficher une modale d'erreur
    Swal.fire({
      title: 'Erreur',
      text: error.response.data || 'Une erreur est survenue lors de la connexion.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
},
  },
};
</script>
