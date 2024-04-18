
import Swal from 'sweetalert2';
export const showToast = async (icon, title, background) => {
    await Swal.fire({
      toast: true,
      position: 'top-end',
      icon: icon,
      title: title,
      color: 'white',
      background: background,
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };