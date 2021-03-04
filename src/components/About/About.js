import { Flex, Box, Image, Text } from "rebass";
import Moment from "react-moment";

const About = ({ articles }) => {
  return (
    <>
      <Flex alignItems='center' justifyContent='center'mb={2}>
        <Box height={2} bg="#424242" width={1 / 4} mt={5}/>
      </Flex>
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        <Box>
          <Image
            src={articles.author.profile.formats.thumbnail.url}
            sx={{
              width: 50,
              height: 50,
              borderRadius: 9999,
            }}
          />
        </Box>
        <Box px={2}>
          <Text fontSize={[2, 3]} fontFamily="Nunito" color='white'>
            By {articles.author.name}
          </Text>
          <Text fontFamily="Nunito" fontSize={[1, 2]} color="grey" py={2}>
            {articles.author.designation}
          </Text>
          <Text fontFamily="Nunito" fontSize={[1, 2]} color="grey">
          <Moment format="D-MMM-YYYY">{articles.published_at}</Moment>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default About;
