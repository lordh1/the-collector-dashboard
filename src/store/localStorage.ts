export const storeToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};

export const getToken = (): string | null => localStorage.getItem('authToken');
