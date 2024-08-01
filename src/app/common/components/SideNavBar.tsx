"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../../lib/data";

import Script from "next/script";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";

import Head from "next/head";
import { Helmet } from "react-helmet";

import { useEffect } from "react";

export default function SideNavBar() {
  return (
    <>
      <Script
        type="text/javascript"
        async
        src={`https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js?cacheControl=${new Date().getTime()}`}
        strategy="beforeInteractive"
      ></Script>

      <Script
        type="text/javascript"
        async
        src={`/static/JS.js?cacheControl=${new Date().getTime()}`}
        strategy="beforeInteractive"
      ></Script>

      {/* <Helmet>
        <script
          src={`https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js?cacheControl=${new Date().getTime()}`}
          type="text/javascript"
        />
        <script
          src={`/static/JS.js?cacheControl=${new Date().getTime()}`}
          type="text/javascript"
          async
        />
      </Helmet> */}

      <div
        id="Main"
        className="xl:rounded-2xl transform  xl:translate-x-0  ease-in-out transition duration-1000  h-full  w-[300px]  bg-gray-600 flex flex-col"
      >
        {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

        <div className="xl:flex justify-stretch p-6 items-center space-x-3">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
              fill="white"
            />
          </svg>
          <p className="text-2xl leading-6 text-white">Make It Fair</p>
        </div>

        <Dashboard_User />

        <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
          {navItems &&
            navItems.map((groupItem: any, key: number) => {
              const groupTitle = groupItem.groupTitle;
              const groupID: string = "id_" + groupTitle;
              return (
                <div key={key}>
                  <button
                    id={groupID}
                    // onclick="showMenu1(true)"
                    className="groupMenu focus:outline-none focus:text-indigo-400 text-left  text-white flow-root justify-between items-center w-[200px]  border-0 py-5 space-x-14  "
                  >
                    <p className="text-sm leading-5  uppercase float-left">
                      {groupTitle}
                    </p>
                    <svg
                      id={"icon_" + groupTitle}
                      className="iconArrow transform  float-right"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 15L12 9L6 15"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="menu1"
                    className="subMenu flex justify-start  flex-col w-full  items-start space-y-3 "
                  >
                    <SubMenuItem items={groupItem.items} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

const SubMenuItem = ({ items }: any) => {
  return (
    <div className=" transition-all duration-1000 w-full   ">
      {items &&
        items.map((item: any, key: number) => {
          return (
            <div className="w-[200px] border-0">
              <Link
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full h-[50px] m-3"
                href={item.itemLink}
              >
                <svg
                  className="fill-stroke"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={item.itemIconPathD}
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-base leading-4  ">{item.itemTitle}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

const Dashboard_User = () => {
  return (
    <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-0 pb-5 ">
      <button className="h-[50px] pl-4 flex jusitfy-start items-center space-x-6 w-full  focus:outline-none hover:bg-gray-700  focus:text-indigo-400  text-white rounded ">
        <RxDashboard />
        <p className="text-base leading-4 ">Dashboard</p>
      </button>
      <button className="h-[50px] pl-4 flex jusitfy-start items-center w-full  space-x-6 focus:outline-none hover:bg-gray-700  text-white focus:text-indigo-400   rounded ">
        <FaRegUser />
        <p className="text-base leading-4 ">Users</p>
      </button>
    </div>
  );
};
