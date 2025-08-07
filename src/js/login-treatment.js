import { ShowToast } from './toast.js';

document.getElementById("form-main").addEventListener('submit', function(event) {
   event.preventDefault();

   let formData = new FormData(this);

   fetch('./php/login-treatment.php', {
       method: "POST",
       body: formData
   }).then(resource => resource.json())
       .then(data => {
           if (data.status === "success") {
               console.log("Succès.");
               ShowToast("Logged in successfully.\n Welcome " + data.username + " !", "success");
           } else if (data.status === "error") {
               console.log("Échec cuisant - " + data.error);
               ShowToast("Couldn't log you in : \n" + data.error, "error");
           }
       }).catch(error => console.error("Erreur AJAX - ", error));
});