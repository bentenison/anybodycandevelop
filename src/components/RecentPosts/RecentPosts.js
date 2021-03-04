import { Box, Flex, Card, Image, Text, Heading } from "rebass";
import Moment from "react-moment";
const RecentPosts = ({ posts }) => {
  return (
    <>
      <Flex
        color="white"
        width={1}
        flexDirection={["column", "row"]}
        alignItems="center"
        flexWrap="wrap"
      >
        <Flex
          width={[1, 1 / 4]}
          justifyContent="flex-end"
          height={["auto", "auto", 400]}
          alignItems="flex-end"
          mb={2}
          p={2}
          bg={["none", "black"]}
          sx={{ borderRadius: 10 }}
        >
          <Heading
            width={1}
            fontSize={[6, 6, 7]}
            fontFamily="Staatliches"
            fontWeight="400"
            sx={{
              //background:"#ff512f",
              background: "linear-gradient(to right, #ff512f, #dd2476)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "left",
            }}
          >
            The Weekly MixUp
          </Heading>
        </Flex>
        <Box
          width={[3 / 4]}
          p={3}
          sx={{
            display: "grid",
            gridGap: 3, // theme.space[3]
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {posts.map((post) => {
            return (
              <Card
                width={[1, 1]}
                key={post.id}
                bg="white"
                color="black"
                sx={{
                  borderRadius: 10,
                  boxShadow: "15px 10px 24px rgba(0, 0, 0, .7)",
                }}
              >
                {" "}
                <Text textAlign="center" fontSize={1} py={2}>
                  <strong>Article </strong>
                  <Moment fromNow style={{ color: "#727272" }}>
                    {post.published_at}
                  </Moment>
                </Text>
                <Image
                  src={post.image.formats.small.url}
                  sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                  height={200}
                  width={1}
                />
                <Heading
                  textAlign="center"
                  px={2}
                  mb={2}
                  fontFamily="Staatliches"
                  fontSize={[2, 3]}
                >
                  {post.Title}
                </Heading>
                <Text
                  px={2}
                  mb={2}
                  color="#727272"
                  letterSpacing="0.4px"
                  fontFamily="Nunito"
                >
                  {post.Description.slice(0, 100)}
                </Text>
              </Card>
            );
          })}
        </Box>
      </Flex>
    </>
  );
};

export default RecentPosts;
