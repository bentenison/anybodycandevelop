import React from "react";
import { fetchAPI } from "../../lib/api";
import { Flex, Box, Text, Heading, Image } from "rebass";
import About from "../../src/components/About/About";
import { ContactForm } from "../../src/components/ContactForm/ContactForm";
import ReactMarkdown from "react-markdown";
import Seo from "../../src/components/Seo/Seo"
const Article = ({ articles }) => {
  const seo = {
    metaTitle: articles.Title,
    metaDescription: articles.Description,
    shareImage: `${articles.image.formats.thumbnail.url}`,
    article: true,
  };
  return (
    <>
    <Seo seo={seo}/>
      <Box
        color="black"
        m="20px auto"
        width={[1, 1, 1]}
        sx={{
          position: "relative",
        }}
      >
        <Image
          src={articles.image.formats.medium.url}
          width={[1, 1, 1]}
          sx={{ filter: "blur(1px)" }}
          my="auto"
          sx={{ borderRadius: 10, boxShadow: "0 0 34px rgba(0, 0, 0, 0.7)" }}
        />

        <Heading
          width={1}
          color="white"
          fontFamily="Staatliches"
          fontSize={["60px", "120px", "120px"]}
          fontWeight="400"
          textAlign="center"
          lineHeight={["50px", "96px", "144px"]}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            textShadow: " 3px 3px #000",
          }}
        >
          {articles.Title}
        </Heading>
      </Box>
      <Box
        fontSize={[2, 3]}
        mx={[1, 5]}
        lineHeight="1.3"
        letterSpacing="0.4px"
        textAlign={["left", "left"]}
      >
        <Text fontWeight="regular" fontFamily="Nunito" color="grey">
          <ReactMarkdown source={articles.Content} escapeHtml={false} />
        </Text>
      </Box>
      <Box>
        <About articles={articles} />
      </Box>
      <Box>
        <ContactForm />
      </Box>
    </>
  );
};

export const getStaticPaths = async () => {
  const articles = await fetchAPI("/articles");
  const paths = articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await fetchAPI(
    `/articles/?slug=${params.slug}&_publicationState=live`
  );
  return {
    props: {
      articles: data[0],
    },
    revalidate: 1,
  };
};

export default Article;
