import axios, { AxiosRequestConfig } from 'axios';
import { TYoutubeApi } from './types';

const youtubeAxiosInstance = {
  search: axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search/',
  }),
  videos: axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos/',
  }),
};

const youtubeApi: TYoutubeApi = (type, config: AxiosRequestConfig) => {
  config.params.key = process.env.REACT_APP_GOOGLE_KEY_API;
  return youtubeAxiosInstance[type].get('/', config);
};

export default youtubeApi;
