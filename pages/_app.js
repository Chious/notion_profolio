import { Head } from "next/dist/lib/load-custom-routes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Website</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
