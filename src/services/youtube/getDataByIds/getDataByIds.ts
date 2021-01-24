import log from 'loglevel';
import youtubeApi from 'providers/youtubeApi';
import { TVideoData } from 'types';

import getMinutesFromDuration from '../helpers/getMinutesFromDuration';

const getDataByIds = async (ids: string[]): Promise<TVideoData[]> => {
  const joinedIds = ids.join(',');

  try {
    const { data } = await youtubeApi('videos', {
      params: {
        id: joinedIds,
        maxResults: 50,
        part: 'contentDetails, snippet',
        type: 'video',
      },
    });

    return data.items.map(({ id, snippet, contentDetails }) => ({
      id,
      description: snippet.description,
      duration: getMinutesFromDuration(contentDetails.duration),
      thumbnail: snippet.thumbnails.high.url,
      title: snippet.title,
    }));
  } catch (error) {
    log.error(error);

    return [];
  }
};

export default getDataByIds;
