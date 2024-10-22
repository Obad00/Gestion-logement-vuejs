// commentaireService.js
import axios from 'axios';

// Créez une instance Axios avec l'URL de base
const apiClient = axios.create({
  baseURL: 'http://localhost:8081', // Modifiez le port ici
  timeout: 1000, // Optionnel : délai d'attente pour les requêtes
});

// Intercepteur pour ajouter le token d'authentification dans les en-têtes
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // Récupérez le token d'authentification depuis le stockage local
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Ajoutez le token dans l'en-tête Authorization
  }
  return config;
}, error => {
  return Promise.reject(error);
});

const commentaireService = {
  // Récupérer tous les commentaires
  getAllCommentaires() {
    return apiClient.get('/api/commentaires');
  },

  // Récupérer un commentaire par ID
  getCommentaireById(id) {
    return apiClient.get(`/api/commentaires/${id}`);
  },

  // Récupérer les commentaires d'un logement spécifique
  getCommentairesByLogement(logementId) {
    return apiClient.get(`/api/commentaires/logement/${logementId}`);
  },

  // Récupérer les commentaires de l'utilisateur connecté
  getUserCommentaires() {
    return apiClient.get('/api/commentaires/utilisateur'); // Assurez-vous que cela correspond à votre endpoint API
  },

  // Créer un nouveau commentaire
  createCommentaire(commentaire, logementId) {
    return apiClient.post('/api/commentaires', { commentaire, logementId });
  },

  // Mettre à jour un commentaire
  updateCommentaire(id, detailsCommentaire) {
    return apiClient.put(`/api/commentaires/${id}`, detailsCommentaire);
  },

  // Supprimer un commentaire
  deleteCommentaire(id) {
    return apiClient.delete(`/api/commentaires/${id}`);
  }
};

export default commentaireService;
