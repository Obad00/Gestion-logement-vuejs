import axios from 'axios';

const API_URL = 'http://localhost:8081/api/categories'; // URL de l'API backend pour les catégories

class CategorieService {
  // Récupérer toutes les catégories
  getAllCategories() {
    return axios.get(API_URL);
  }

  // Créer une nouvelle catégorie
  createCategorie(categorie) {
    const token = localStorage.getItem('token');
    return axios.post(API_URL, categorie, {
      headers: {
        Authorization: `Bearer ${token}` // Ajouter le token JWT
      }
    });
  }

  // Récupérer une catégorie par ID
  getCategorieById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  // Mettre à jour une catégorie
  updateCategorie(id, categorie, token) {
    return axios.put(`${API_URL}/${id}`, categorie, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Supprimer une catégorie
  deleteCategorie(id, token) {
    return axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}

export default new CategorieService();
