import axios from 'axios';

const API_URL = 'http://localhost:8081/api/reservations';  // L'URL de votre API Spring

export default {
    // Fonction pour récupérer le token depuis localStorage
    getToken() {
        return localStorage.getItem('token');
    },

    // Créer une réservation
    createReservation(reservationData) {
        const token = this.getToken();
        return axios.post(API_URL, reservationData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
    },

    // Récupérer toutes les réservations pour l'utilisateur connecté
    getUserReservations() {
        const token = this.getToken();
        return axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    },

    // Mettre à jour le statut d'une réservation
// Mettre à jour le statut d'une réservation
updateReservationStatus(id, newStatus) {
    const token = this.getToken(); // Récupérer le token d'authentification
    return axios.put(`${API_URL}/${id}/status`, newStatus, {
        headers: {
            'Authorization': `Bearer ${token}`,
'Content-Type': 'application/json'
        }
    });

},


    // Supprimer une réservation
    deleteReservation(id) {
        const token = this.getToken();
        return axios.delete(`${API_URL}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
};
