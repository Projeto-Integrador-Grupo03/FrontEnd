import { toast } from 'react-toastify';

export function toastAlerta(mensagem: string, tipo: string) {
    switch (tipo) {
            
        case 'sucesso':
          toast.success(mensagem, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            });
            break;

        case 'info':
          toast.info(mensagem, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            });
            break;

        case 'erro':
          toast.error(mensagem, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            });
            break;

        default:
          toast(mensagem, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            });
            break;
    }
}