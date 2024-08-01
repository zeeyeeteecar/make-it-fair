"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../../lib/lib";

export default function SideNavBar() {
  const pathname = usePathname();

  return (
    <div className="h-full w-[250px]  flex flex-col bg-gray-300 text-gray-800 border-0 border-orange-100 rounded-2xl">
      <div className="flex flex-col top-0 left-0 w-full bg-white h-full border-r  text-gray-800 rounded-2xl ">
        {navItems.map((itemGroup: any, key: number) => {
          return (
            <>
              <div className="flex items-center justify-center h-14 border-0 bg-blue-400 text-white font-semibold rounded-t-xl ">
                <div>{itemGroup.groupTitle}</div>
              </div>
              {itemGroup &&
                itemGroup.items.map((item: any, key: number) => {
                  const href = item.itemLink;
                  const isActive = pathname === href;

                  // const class_Name = `${
                  //   isActive
                  //     ? "text-blue-500 bg-blue-100 border-red-500"
                  //     : "text-black"
                  // } text-sm `;
                  // text-gray-600  pr-6

                  return (
                    <Link
                      key={key}
                      href={item.itemLink}
                      className=" flex flex-row items-center  h-12 hover:bg-indigo-50 hover:text-gray-800 border-r-4 border-transparent hover:border-indigo-500 duration-1000 active:bg-red-400 "
                    >
                      <span className="inline-flex justify-center items-center ml-4 ">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={item.itemIconPathD}
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        {item.itemTitle}
                      </span>
                      <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                        1.2k
                      </span>
                    </Link>
                  );
                })}
            </>
          );
        })}

        {/* <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <div className="flex flex-col py-4 space-y-1">
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              ></a>
            </li>
          </div>
        </div> */}
      </div>
    </div>
  );
}
