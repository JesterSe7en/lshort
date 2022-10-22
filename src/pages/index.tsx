import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-700 py-2 font-sans">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-white">
        <h1 className="text-6xl font-bold">Welcome to Link Shortener</h1>

        <p className="mt-3 text-2xl">Paste your link below to shorten it!</p>

        <div className="mt-6 flex w-full flex-wrap items-center justify-around sm:w-full">
          <p>Test</p>
        </div>
      </main>

      <footer className="h-15 flex w-full items-center justify-center border-t py-3 text-white">
        <p className="flex items-center justify-center gap-2">
          Created by Alex Chan
        </p>
      </footer>
    </div>
  );
};

export default Home;
