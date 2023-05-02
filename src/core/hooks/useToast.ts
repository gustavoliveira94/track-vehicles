import { toast } from 'react-toastify';

interface IToast {
  message: string;
}

export const useToast = () => {
  return {
    success: ({ message }: IToast) => toast.success(message),
    error: ({ message }: IToast) => toast.error(message),
  };
};
