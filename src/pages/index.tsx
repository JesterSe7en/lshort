import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [state, setState] = useState({ loading: false });

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const txtURL = (document.getElementById("txtbox_url") as HTMLInputElement)
      .value;

    setState({ ...state, loading: true });
    console.log("posting to /api/create-url");

    const response = await fetch(`/api/create-url`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: txtURL }),
    });

    const content = await response.json();
    console.log(content.message);

    setState({ ...state, loading: false });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-700 py-2 font-sans">
      <Head>
        <title>Link Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-white">
        <h1 className="text-6xl font-bold">Welcome to Link Shortener</h1>

        <p className="mt-3 text-2xl">Paste your link below to shorten it!</p>

        <div className="mt-6 flex w-full flex-wrap items-center justify-center sm:w-full">
          <form onSubmit={submitForm}>
            <input
              type="text"
              name="url"
              id="txtbox_url"
              placeholder="http://www.google.com"
              className="mr-2 px-2 text-black placeholder-slate-400 outline-none"
            />

            <input
              type="submit"
              value="Shorten!"
              className="rounded-full bg-cyan-500 py-2 px-4 text-sm font-semibold text-white shadow-sm"
            />
          </form>
          <p className="text-m flex w-full flex-wrap items-center justify-center text-white shadow-sm ">{</p>
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
