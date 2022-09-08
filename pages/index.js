import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Social Feed</title>
      </Head>

      {/* header */}
      <Header></Header>

      <main>
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
