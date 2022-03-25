import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web/Mobile Project</title>
        <meta
          name="description"
          content="This project is a messaging system with end-to-end encyption!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>hello world</div>
    </div>
  );
}
