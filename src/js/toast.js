export function ShowToast(message, type) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toastToAdd = document.createElement("div");
    toastToAdd.classList.add("w-50", "mt-2.5", "px-3", "py-3", "text-white", "rounded-sm", "shadow-2xl", "opacity-90");

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