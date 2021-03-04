import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import AllPosts from "../src/components/AllPosts/AllPosts";
import RecentPosts from "../src/components/RecentPosts/RecentPosts";
import Hero from "../src/components/Hero/Hero";
export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AllPosts articles={posts} />
      <RecentPosts posts={posts} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/articles`);
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
    revalidate: 1,
  };
};
