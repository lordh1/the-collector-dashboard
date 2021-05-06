import { getToken } from '../store/localStorage';

type requestType = {
  method: string;
  endpoint: string;
  body?: Record<string, unknown>;
  queryString?: string;
};

type dataType = {
  timestamp: number;
  value: number;
};

export const apiService = async ({
  method,
  endpoint,
  body,
}: requestType): Promise<Array<dataType>> => {
  const request = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  });
  return request.json();
};

export const apiServiceAuth = async ({
  method,
  endpoint,
  body,
}: requestType): Promise<Record<string, string>> => {
  const request = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}mnmnm`,
    },
    body: JSON.stringify(body),
  });
  return request.json();
};
