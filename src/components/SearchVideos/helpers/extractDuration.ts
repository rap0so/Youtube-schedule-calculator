import { TVideoData } from 'types';

const extractDuration = (videos: TVideoData[]) =>
  videos.map((video) => video.duration);

export default extractDuration;
