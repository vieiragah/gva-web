import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosError,
    Method,
    AxiosResponse,
    RawAxiosRequestHeaders,
    ResponseType
  } from 'axios';
  import { toast } from 'react-toastify';
  
  import { errorStack } from '../../helpers';
  
  export class HttpClient {
    private axiosClient: AxiosInstance;
  
    constructor({
      baseURL,
      headers,
    }: {
      baseURL: string;
      headers?: RawAxiosRequestHeaders;
    }) {
      this.axiosClient = axios.create({
        baseURL,
        timeout: 1000000,
        headers,
      });
  
      this.setupInterceptors(3);
    }
  
    private setupInterceptors(retries: number): void {
      this.axiosClient.interceptors.request.use(
        (config: AxiosRequestConfig): any => {
          if (config.headers !== undefined) {
            // const accessToken = '';
            // if (accessToken) {
            //   config.headers!.Authorization = `Bearer ${accessToken}`;
            // }
            return config;
          }
        },
        (error: AxiosError) => {
          return Promise.reject(error);
        }
      );
  
      this.axiosClient.interceptors.response.use(
        (response) => {
          return response;
        },
        (error: AxiosError) => {
          if (
            error.code === AxiosError.ECONNABORTED &&
            (error.config!.retries ?? 0) < retries
          ) {
            error.config!.retries = (error.config!.retries ?? 0) + 1;
            return this.axiosClient.request(error.config!);
          } else {
            const errors =
              errorStack[error.code!] || 'Erro desconhecido, algo deu errado.';
            toast.error(errors, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          }
          return Promise.reject(error);
        }
      );
    }
  
    public async request<T = any>({
      method,
      url,
      data,
      responseType
    }: {
      method: Method;
      url: string;
      data?: T;
      responseType?: ResponseType
    }): Promise<AxiosResponse> {
      return await this.axiosClient.request({ url, method, data, responseType });
    }
  }
  