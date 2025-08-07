/**
 * Fonction utilitaire générant une notification toast, l'implémentant au DOM et la supprimant après trois secondes.
 * @param {string} message - Le message à afficher dans la notification.
 * @param {string} type - Définit le "type" de la notification. Prend en charge "success" (fond vert) et "error" (fond rouge).
 */
export function ShowToast(message, type) {
    const container = document.getElementById("toast-container");
    // Arrête l'exécution de la fonction si le conteneur à notification toast n'existe pas dans le DOM depuis lequel elle est appelée.
    if (!container) return;

    const toastToAdd = document.createElement("div");
    // Liste des classes Tailwind CSS à ajouter par défaut au toast.
    toastToAdd.classList.add("w-50", "mt-2.5", "px-3", "py-3", "text-white", "rounded-sm", "shadow-2xl", "opacity-90");

    // Batterie if/else permettant d'ajouter les classes thématiques.
    // On peut imaginer un système de dictionnaire ou de map si plusieurs types permettent l'ajout de plusieurs classes différentes.
    if (type === "success") {
        toastToAdd.classList.add("bg-green-600");
    } else if (type === "error") {
        toastToAdd.classList.add("bg-red-600");
    }

    toastToAdd.textContent = message;

    container.appendChild(toastToAdd);

    setTimeout(() => {
        toastToAdd.classList.add("hidden");
    }, 3000);
}