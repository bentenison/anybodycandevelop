import { Box, Flex, Heading, Image, Text, Card } from "rebass";
import Link from "next/link";
const AllPosts = ({ articles }) => {
  const leftArticles = articles.slice(0, 2);
  return (
    <>
      <Box>
        <Heading
          fontFamily="Staatliches"
          fontWeight="400"
          fontSize={[7, "120px"]}
          width={1}
        >
          My Blogs
        </Heading>
        <Flex flexDirection={["column", "row"]}>
          <Flex
            width={[1, 1 / 2]}
            px={2}
            flexDirection="column"
            alignItems="center"
          >
            {leftArticles.map((article) => {
              return (
                <Link
                  as={`/posts/${article.slug}`}
                  href="/posts/[slug]"
                  key={article.slug}
                >
                  <a style={{ color: "white", textDecoration: "none" }}>
                    <Card width={[1, 1]} mb={4}>
                      <Image
                        src={article.image.formats.medium.url}
                        alt="blog image"
                        width={1}
                        sx={{
                          transition: "all 0.5s ease-in-out",
                          "&:hover": {
                            opacity: 0.8,
                          },
                        }}
                      />

                      <Text px={3} my={4}>
                        {article.category.name}
                      </Text>

                      <Text px={3} fontFamily="Nunito" fontSize={[3, 4]} letterSpacing={'0.4px'}>
                        {article.Title}
                      </Text>
                    </Card>
                  </a>
                </Link>
              );
            })}
          </Flex>
          <Box
            sx={{
              display: "grid",
              gridGap: 3, // theme.space[3]
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              alignContent: "start",
            }}
            width={[1, 1 / 2]}
            px={2}
          >
            {articles.map((articleRight) => {
              return (
                <Link
                  as={`/posts/${articleRight.slug}`}
                  href="/posts/[slug]"
                  key={articleRight._id}
                >
                  <a style={{ color: "white", textDecoration: "none" }}>
                    <Card width={1} mb={4}>
                      <Image src={articleRight.image.formats.small.url} />

                      <Text px={3} my={4}>
                        {articleRight.category.name}
                      </Text>

                      <Text px={3} fontFamily="Nunito" fontSize={[3, 4]}>
                        {articleRight.Title}
                      </Text>
                    </Card>
                  </a>
                </Link>
              );
            })}
          </Box>
        </Flex>
      </Box>
      <Box height={2} bg="#727272" width={1} mb={3}>
       
      </Box>
    </>
  );
};

export default AllPosts;
