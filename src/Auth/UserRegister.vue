<template>
  <div class="body">
    <div class="containers">
      <div class="form-section">
        <h1>Inscrivez-vous</h1>

        <form @submit.prevent="registerUser" class="form-fields">
          <div class="flex">
            <input type="text" v-model="user.nom" placeholder="Nom" class="form-field" required />
          <input type="text" v-model="user.prenom" placeholder="Prénom" class="form-field" required />
          </div>
          <div class="flex">
            <input type="text" v-model="user.adresse" placeholder="Adresse" class="form-field" required />
          <input type="email" v-model="user.email" placeholder="Email" class="form-field" required />
          </div>
         <div class="flex">
          <input type="password" v-model="user.password" placeholder="Mot de passe" class="form-field" required />
          <input type="text" v-model="user.telephone" placeholder="Téléphone" class="form-field" required />
         </div>
          
          <select v-model="user.role" class="form-field">
            <option value="LOCATAIRE">Locataire</option>
            <option value="PROPRIETAIRE">Propriétaire</option>
            <option value="ADMIN">Administrateur</option>
          </select>

          <button type="submit" class="submit-button">S'inscrire</button>
        </form>

        <p class="terms">{{ message }}</p>
      </div>

      <div class="image-section">
        <div class="login-image-container">
          <img class="login-image" src="@/assets/image/Group 12969.png" alt="login form image">
          <img class="logo-image" src="@/assets/image/logo.svg" alt="login form image">

          <div class="ou">
            <p>HAUSS</p>
          </div>

          <div class="ou">
            <p>Le logement idéal, à portée de clic.</p>
            <img class="login-imag" src="@/assets/image/Group 301.png" alt="login form image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        nom: '',
        prenom: '',
        adresse: '',
        email: '',
        password: '',
        telephone: '',
        role: 'LOCATAIRE',
      },
      message: '',
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:8081/auth/register', this.user);
        this.message = response.data;
      } catch (error) {
        this.message = error.response.data;
      }
    },
  },
};
</script>

<style scoped>
.body {
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
  
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.containers {
  display: flex;
  width: 100%;
  height: 100%;
}

.form-section {
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; /* Occupe toute la hauteur */
}

.form-section h1 {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-fields {
  max-width: 400px;
  margin: 0 auto;
}

.flex {
  display: flex;
}

.form-field {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  background-color: #edf2f7;
  border: 1px solid #e2e8f0;
  margin-bottom: 15px;
  font-size: 16px;
}

.form-field:focus {
  border-color: #cbd5e0;
  background-color: white;
  outline: none;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #4f46e5;
}

.terms {
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
}

.image-section {
  width: 90%;
  background: linear-gradient(to right, #ecffed, #ecffed);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-image-container {
  text-align: center;
}

.login-image, .logo-image {
  width: 200px;
  display: block;
  margin: 20px auto;
}

.ou {
  text-align: center;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .login-image-container {
    width: 50%;
    height: 100%;
}


.login-image {
    width: 100%;
    height: auto;
    border-radius: 0.75rem;
    padding: 10px;
}

.logo-image {
    width: 35%;
    border-radius: 0.75rem;
    position: absolute;
    left: 49%;
    bottom: 45%;
}

.login-imag {
    width: 30%;
    height: auto;
    border-radius: 0.75rem;
    padding: 10px;
}

.ou {
    text-align: center;
    display: block;
    align-items: center;
    justify-content: center;
}

  .form-section, .image-section {
    width: 100%;
    height: auto; /* Ajustement pour les petits écrans */
  }

  .image-section {
    display: none;
  }
}
</style>
