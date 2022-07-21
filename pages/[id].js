import { useRouter } from "next/router";
import Head from "next/head";

const Dynamic = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <h1>I am Dynamic Route: {router.query.id}</h1>
    </>
  );
};

export default Dynamic;
