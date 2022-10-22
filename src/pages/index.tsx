import type { NextPage } from "next";
import Head from "next/head";
import React, { FormEventHandler, useState } from "react";

const Home: NextPage = () => {
  const [state, setState] = useState({ loading: false });

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const txtUrl = document.getElementById("txtbox_url") as HTMLInputElement;

    // setState({ ...state, loading: true });
    // const response = await fetch(`http://127.0.0.01/user/register`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email: "test@gmail.com", password: "test" }),
    // });
    // const content = await response.json();
    // setState({ ...state, loading: false });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-700 py-2 font-sans">
      <Head>
        <title>Create Next App</title>
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
