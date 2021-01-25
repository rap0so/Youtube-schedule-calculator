import { AxiosRequestConfig, AxiosResponse } from 'axios';

type TYoutubeApiItems = {
  etag: string;
  id: { kind: string; videoId: string };
  kind: string;
  contentDetails: {
    duration: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      [key in 'default' | 'standard' | 'high' | 'medium']: {
        url: string;
      };
    };
  };
};

type TYoutubeApiResponse = {
  etag: string;
  items: TYoutubeApiItems[];
  kind: string;
  nextPageToken: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
  regionCode: string;
};

export type TYoutubeApi = (
  type: 'search' | 'videos',
  config: AxiosRequestConfig,
) => TYoutubeApiReturn;

export type TYoutubeApiReturn = Promise<AxiosResponse<TYoutubeApiResponse>>;
