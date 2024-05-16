import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as qs from 'qs';
import { HttpError } from './Error';

/**
* Class Http
*/
export class Http {
  protected httpClient: AxiosInstance;

  /**
   * Class constructor
   * @param {string} apiUrlBase
   * @param {string} authUrlBase
   */
  constructor(
    private apiUrlBase: string,
    private authUrlBase: string
  ) {
    this.httpClient = axios.create();
  }

  /**
   * Sent api request
   * @param {string} method
   * @param {string} path
   * @param {Object} params
   * @param {Object} headers
   *
   * @returns {Promise<AxiosResponse<any>>}
   */
  request(
    method: string,
    path: string,
    params = {},
    headers = {}
  ): Promise<AxiosResponse<any>> {
    let url = this.apiUrl(path);
    return this.process(url, method, params, headers);
  }

  /**
   * Sent auth request
   * @param {string} method
   * @param {string} path
   * @param {Object} params
   * @param {Object} headers
   *
   * @returns {Promise<AxiosResponse<any>>}
   */
  authRequest(
    method: string,
    path: string,
    params = {},
    headers = {}
  ): Promise<AxiosResponse<any>> {
    let url = this.authUrl(path);
    return this.process(url, method, params, headers);
  }

  /**
   * Process request
   * @param {string} method
   * @param {string} path
   * @param {Object} params
   * @param {Object} headers
   *
   * @returns {Promise<AxiosResponse<any>>}
   */
  process(
    url: string,
    method: string,
    params = {},
    headers: any = {},
    options: any = {}
  ): Promise<AxiosResponse<any>> {
    method = method.toUpperCase();

    let requestConfig: AxiosRequestConfig = {
      method,
      url,
      headers
    }

    if (['GET', 'HEAD', 'DELETE'].indexOf(method) > -1) {
      requestConfig['params'] = params;
    } else {
      if (headers['Content-Type'] == 'application/x-www-form-urlencoded') {
        requestConfig['data'] = qs.stringify(params);
      } else {
        requestConfig['data'] = params;
      }
    }

    return this.httpClient.request(requestConfig)
      .catch(this.handleRequestException);
  }

  /**
   * Handle request exception
   * @param {any} e
   * @returns {Promise<HttpError>}
   */
  protected handleRequestException(e: any) {
    let message = `Request error: ${e.message}`;
    const httpResponse = e.response;
    if (httpResponse && httpResponse.data) {
      message += ' ' + JSON.stringify(httpResponse.data);
    }

    return Promise.reject(new HttpError(message));
  }

  /**
   * Return the api url
   * @param {string} path
   */
  protected apiUrl(path = '') {
    return `${this.apiUrlBase}${path}`;
  }

  /**
   * Return the auth api url
   * @param {string} path
   */
  protected authUrl(path = '') {
    return `${this.authUrlBase}${path}`;
  }
}
