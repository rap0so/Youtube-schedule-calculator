import { TYoutubeApi, TYoutubeApiReturn } from 'providers/youtubeApi/types';
import search from './search';
import videos from './videos';

const mockedYoutubeApi: TYoutubeApi = (type) => {
  if (type.includes('search')) {
    return Promise.resolve({
      data: search,
    }) as TYoutubeApiReturn;
  }

  return (Promise.resolve({
    data: videos,
  }) as unknown) as TYoutubeApiReturn;
};

export default mockedYoutubeApi;
