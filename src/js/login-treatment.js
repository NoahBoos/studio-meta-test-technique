import { ShowToast } from './toast.js';

// Ajout d'un event listener sur le bouton d'envoi du formulaire.
document.getElementById("form-main").addEventListener('submit', function(event) {
    // Désactivation de la redirection par défaut du bouton.
   event.preventDefault();

   // Récupération des données du formulaire.
   let formData = new FormData(this);

   // Lancement d'une requête AJAX en utilisant le script login-treatment.php.
   fetch('./php/login-treatment.php', {
       method: "POST",
       body: formData
   }).then(resource => resource.json())
       .then(data => {
           // Récupération des données et affichages d'une notification toast.
           if (data.status === "success") {
               ShowToast("Logged in successfully.\n Welcome " + data.username + " !", "success");
           } else if (data.status === "error") {
               ShowToast("Couldn't log you in : \n" + data.error, "error");
           }
       }).catch(error => console.error("Erreur AJAX - ", error)); // Affichage de l'erreur AJAX, si erreur il y a.
});