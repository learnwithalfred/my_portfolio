import { Helmet } from "react-helmet";
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

// handle Helmet

export const RenderTitle = ({
  title = 'Alfred Boateng',
  description = 'A mid level software developer',
}) => (
  <Helmet>
    <title>{title} </title>
    <meta property="og:url" content={window} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);