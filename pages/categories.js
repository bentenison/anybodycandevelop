import { Box, Flex, Heading, Text, Image, Card } from "rebass";
import { fetchAPI } from "../lib/api";
import Link from "next/link";
const Categories = ({ articles }) => {
  const GatsbyArticles = articles.filter(
    (article) => article.category.slug !== "next-js"
  );
  const NextArticles = articles.filter(
    (article) => article.category.slug === "next-js"
  );

  return (
    <Box>
      <Flex>
        <Heading
          fontFamily="Staatliches"
          fontWeight="400"
          fontSize={[7, "120px"]}
          width={1}
        >
          Gatsby-Js
        </Heading>
      </Flex>
      <Flex flexDirection={["column", "row"]} width={1}>
        <Flex
          width={[1, 1]}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          {GatsbyArticles.map((article) => {
            return (
              <Link
                as={`/posts/${article.slug}`}
                href="/posts/[slug]"
                key={article.slug}
              >
                <a style={{ color: "white", textDecoration: "none" }}>
                  <Card width={[1, "600px"]} mb={4}>
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

                    <Text
                      px={3}
                      fontFamily="Nunito"
                      fontSize={[3, 4]}
                      letterSpacing={"0.4px"}
                    >
                      {article.Title}
                    </Text>
                  </Card>
                </a>
              </Link>
            );
          })}
        </Flex>
      </Flex>
      <Flex>
        <Heading
          fontFamily="Staatliches"
          fontWeight="400"
          fontSize={[7, "120px"]}
          width={1}
        >
          Next-JS
        </Heading>
      </Flex>
      <Flex
        width={[1, 1]}
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        {NextArticles.map((article) => {
          return (
            <Link
              as={`/posts/${article.slug}`}
              href="/posts/[slug]"
              key={article.slug}
            >
              <a style={{ color: "white", textDecoration: "none" }}>
                <Card width={[1, "600px"]} mb={4}>
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

                  <Text
                    px={3}
                    fontFamily="Nunito"
                    fontSize={[3, 4]}
                    letterSpacing={"0.4px"}
                  >
                    {article.Title}
                  </Text>
                </Card>
              </a>
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};
export const getStaticProps = async (context) => {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/articles`);
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
    revalidate: 1,
  };
};
export default Categories;
