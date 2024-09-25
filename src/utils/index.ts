import { toast } from 'react-toastify';

const toastSuccess = (message?: string) => toast.success(message);
const toastError = (message?: string) => toast.error(message);

export { toastError, toastSuccess };
