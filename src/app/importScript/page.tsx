"use client";
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        /*This is loads the script in head tag of your html document*/
      </Head>
      <Script
        type="text/javascript"
        async
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      />
      <Script type="text/javascript" src="/js/JS.js" strategy="lazyOnload"></Script>
      <div className="max-w-2xl mx-auto">
        <div id="someText" className="border-2">
          text text
        </div>
        <div id="demo"></div>
      </div>
    </>
  );
}
