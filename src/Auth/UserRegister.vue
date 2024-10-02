<template>
  <div class="body">
    <div class="containers">
      <div class="form-section">
        <h1 class="login-title">Bienvenue chez <img src="@/assets/image/Rectangle 87.png">!</h1>
        <p class="login-description">Vous n’avez pas de compte? S’inscrire</p>
        <form @submit.prevent="registerUser" class="form-fields">
          <div class="flex">
            <div>
              <label for="">Nom</label>
              <input type="text" v-model="user.nom" placeholder="Nom" class="form-field" required />
            </div>
            <div>
              <label for="">Prénom</label>
              <input type="text" v-model="user.prenom" placeholder="Prénom" class="form-field" required />
            </div>
          </div>
          <div class="flex">
            <div>
              <label for="">Adresse</label>
              <input type="text" v-model="user.adresse" placeholder="Adresse" class="form-field" required />
            </div>
            <div>
              <label for="">Téléphone</label>
              <input type="text" v-model="user.telephone" placeholder="Téléphone" class="form-field" required />
            </div>
          </div>

          <div class="flex">
            <div class="form-field role-selection">
              <input type="radio" id="locataire" value="LOCATAIRE" v-model="user.role" />
              <label for="locataire">Locataire</label>
            </div>
            <div class="form-field role-selection">
              <input type="radio" id="proprietaire" value="PROPRIETAIRE" v-model="user.role" />
              <label for="proprietaire">Propriétaire</label>
            </div>
          </div>

          <div class="pad">
            <div class="padd">
              <label for="">Email</label>
              <input type="email" v-model="user.email" placeholder="Email" class="form-field" required />
            </div>

            <div>
              <label for="">Mot de passe</label>
              <input type="password" v-model="user.password" placeholder="Mot de passe" class="form-field" required />
            </div>
          </div>
          <button type="submit" class="submit-button">S'inscrire</button>
        </form>

        <p class="terms">{{ message }}</p>
      </div>

      <div class="image-section">
        <div class="login-image-container">
          <img class="register-image" src="@/assets/image/Group 3.svg" alt="login form image">
          <div class="register">
            <p>HAUSS</p>
          </div>
          <div class="register">
            <p>Le logement idéal, à portée de clic.</p>
            <img class="register-imag" src="@/assets/image/Group 301.svg" alt="login form image">
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
        role: '', // Assurez-vous que cela commence comme une chaîne vide
      },
      message: '',
    };
  },
  methods: {
    async registerUser() {
      if (!this.user.role) {
        this.message = "Veuillez sélectionner un rôle.";
        return;
      }

      try {
        const response = await axios.post('http://localhost:8081/auth/register', {
          ...this.user,
          roles: [this.user.role],  // Envoi le rôle sélectionné dans un tableau
        });
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
  width: 40%;
  background-color: white;
  display: flex;
  align-items: center;
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
  padding: 30px;
}

.role-selection {
  padding: 10px;
  display: flex;
  gap: 35px;
  align-items: center;
}

.role-selection div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.role-selection label {
  font-size: 16px;
}

/* Style quand une case est cochée */
.role-selection input[type="checkbox"]:checked + label {
  color: #356F37;
  font-weight: bold;
}

.role-selection input[type="checkbox"]:checked {
  accent-color: #356F37;
}


.flex {
  display: flex;
  gap: 35px;
  padding: 10px;
}

.pad {
  padding: 10px;
}

.padd{
  margin-bottom: 10px;
}

.form-field {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  background-color: #edf2f7;
  border: 1px solid #e2e8f0;
  margin-bottom: 1px;
  font-size: 16px;
}

.form-field:focus {
  border-color: #356F37;
  background-color: white;
  outline: none;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #EB9655;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #356F37;
}

.terms {
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
}

.image-section {
  width: 60%;
  background: linear-gradient(to right, #ecffed, #ecffed);
  justify-content: center;
  align-items: center;
}

.login-image-container {
  text-align: center;
}

.register-image, .logor-image {
  width: 700px;
  display: block;
}

.register {
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


.register-image {
    width: 100%;
}

/* .logor-image {
    width: 35%;
    border-radius: 0.75rem;
    position: absolute;
    left: 49%;
    bottom: 45%;
} */

.register-imag {
    width: 30%;
    height: auto;
    border-radius: 0.75rem;
}

.register {
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
