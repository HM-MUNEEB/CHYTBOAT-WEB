import Head from "next/head";
import Image from "next/image";
import LandingPage from "../components/landingPage/landingPage.js";

export default function Home() {
  return (
    <div className="webmobileproj">
      <Head>
        <title>Web/Mobile Project</title>
        <meta
          name="description"
          content="This project is a messaging system with end-to-end encyption!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="LandingPage">
        <LandingPage />
      </div>
    </div>
  );
}
