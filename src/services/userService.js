// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:8081/users';

const userService = {
  getAllUsers() {
    const token = localStorage.getItem('token'); // Récupérer le token stocké
    return axios.get(`${API_URL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`, // Ajouter le token dans les en-têtes
      },
    }).then(response => response.data)
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        throw error; // Rejeter l'erreur pour que le composant puisse la gérer
      });
  }
};

export default userService;
