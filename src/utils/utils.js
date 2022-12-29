import { toast } from "react-toastify";

export const API_KEY = "";
export const handleToast = ({ msg, type = 'success' }) =>
  toast(msg, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: 'colored',
    type,
  });