import Swal from 'sweetalert2';

const showAlert = (title, text, icon, button) => {
    Swal.fire({
      title: title || "Default Title",
      text: text || "Default Text",
      icon: icon || "info",
      confirmButtonText: button || "Ok",
    });
  };

export default showAlert;