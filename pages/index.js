import Head from "next/head";
import Image from "next/image";
import LandingPage from "../components/landingPage/landingPage.js";

export default function Home() {
  return (
    <div className="webmobileproj">
      <Head>
        <title>ChytBoat: The Most Secured Messaging App</title>
        <meta
          name="description"
          content="ChyBoat is the most secured messaging app with end-to-end encyption!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="LandingPage">
        <LandingPage />
      </div>
    </div>
  );
}
