import Swal from 'sweetalert2';

const showAlert = (title, text, icon, confirmButtonText = "Ok", showCancelButton = false) => {
  return Swal.fire({
    title: title || "Default Title",
    text: text || "Default Text",
    icon: icon || "info",
    confirmButtonText,
    showCancelButton,
    cancelButtonText: "Cancelar",
  });
};

export default showAlert;