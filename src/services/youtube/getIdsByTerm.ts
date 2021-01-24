import log from 'loglevel';
import youtubeApi from 'providers/youtubeApi';

const getIdsByTerm = async (term: string) => {
  try {
    const { data } = await youtubeApi('search', {
      params: {
        maxResults: 50,
        part: 'id',
        q: term,
        type: 'video',
      },
    });

    return data.items.map(({ id }) => id.videoId);
  } catch (error) {
    log.error(error);

    return [];
  }
};

export default getIdsByTerm;
