import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Result from "../components/Result";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone - Ferdous Al Hasan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header Component */}
      <Header />
      {/* Navbar Component */}
      <Navbar />
      {/* Result Component */}
      <Result results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}

// https://youtu.be/MqDlsjc8GLo?t=6816