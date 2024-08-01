import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

import "../common/components/css/styles.css";

export default function FirstPost() {
  return (
    <div className="w-screen h-screen bg-white text-slate-500">
      <Head>
        <Link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
        />
      </Head>
      <Script
        type="text/javascript"
        defer
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
      ></Script>
      <Script
        type="text/javascript"
        async
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      />
      <Script
        type="text/javascript"
        async
        src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"
      />
      <Script
        type="text/javascript"
        src="/js/JS.js"
        strategy="lazyOnload"
      ></Script>

      <nav className="flex px-4 border-b md:shadow-lg items-center relative">
        <div className="text-lg font-bold md:py-0 py-4">Logo</div>
        <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
          <li>
            <a
              href="#"
              className="flex md:inline-flex p-4 items-center hover:bg-slate-100"
            >
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex md:inline-flex p-4 items-center hover:bg-slate-100"
            >
              <span>Products</span>
            </a>
          </li>
          <li className="relative parent">
            <a
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-slate-100 space-x-2"
            >
              <span>Service</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </a>
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
              <li>
                <a href="#" className="flex px-4 py-3 hover:bg-slate-100">
                  Web development
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-3 hover:bg-slate-100">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-3 hover:bg-slate-100">
                  Machine Learning
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="flex md:inline-flex p-4 items-center hover:bg-slate-100"
            >
              <span>About us</span>
            </a>
          </li>
        </ul>
        <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </div>
      </nav>
    </div>
  );
}
