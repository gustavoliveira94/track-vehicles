import axios, { AxiosRequestConfig } from 'axios';

const fetch = axios.create();

const httpClient = () => {
  const get = async <Data = any>(
    url: string,
    options?: AxiosRequestConfig,
  ): Promise<Data> => {
    try {
      const { data } = await fetch.get(url, options);

      return data;
    } catch (e: any) {
      return e;
    }
  };

  return {
    get,
  };
};

export default httpClient();
