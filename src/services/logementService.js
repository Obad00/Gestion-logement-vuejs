// logementService.js
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/logements'; 

class LogementService {
  
  // Récupérer tous les logements
  getAllLogements() {
    return axios.get(API_URL); // Plus besoin de passer le token
  }
  
  // Créer un nouveau logement
  createLogement(logement) {
    const token = localStorage.getItem('token'); 

    return axios.post(API_URL, logement, {
      headers: {
        Authorization: `Bearer ${token}` // Ajouter le token JWT
      }
    });
  }

  // Récupérer un logement par ID
  getLogementById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  // Mettre à jour un logement
  updateLogement(id, logement, token) {
    return axios.put(`${API_URL}/${id}`, logement, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Récupérer les commentaires d'un logement par ID
  getCommentairesByLogement(logementId) {
    return axios.get(`http://localhost:8081/api/commentaires/logement/${logementId}`); // Utiliser axios pour faire la requête
  }

  // Supprimer un logement
  deleteLogement(id, token) {
    return axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}

export default new LogementService();
