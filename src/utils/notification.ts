import { message } from 'antd';

const showError = (errorMessage: string) => {
    message.error(errorMessage);
};

const showSuccess = (successMessage: string) => {
    message.success(successMessage);
};

export { showError, showSuccess }