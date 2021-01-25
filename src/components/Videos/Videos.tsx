import { Box, Flex, Text } from 'rebass';
import { Card, CardContent, CardMedia } from 'ui-neumorphism';
import { TVideos } from './types';

const Videos = ({ videos }: TVideos) => {
  return (
    <Flex flexWrap="wrap">
      {videos.map(({ id, description, title, thumbnail }) => {
        const videoUrl = `https://youtu.be/${id}`;
        const shortDescription = description.slice(0, 100);

        return (
          <Box data-test="video-box" flex="1 0 30%" key={videoUrl} m="2">
            <a href={videoUrl} rel="noreferrer" target="_blank">
              <Card style={{ height: '100%' }}>
                <CardMedia src={thumbnail} />
                <CardContent>
                  <Text
                    fontSize="14px"
                    mb="3"
                    textAlign="left"
                    variant="subTitle"
                  >
                    {title}
                  </Text>

                  <Text pb="3">{shortDescription}...</Text>
                </CardContent>
              </Card>
            </a>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Videos;
