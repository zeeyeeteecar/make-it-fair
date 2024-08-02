"use client";
import React from "react";

export default function MakeItFair_Data_Row_IPInfo({
  fun_getIPInfo,
  answerIP,
}: any) {
  const [ipInfo, setIpInfo] = React.useState({});

  async function handleMouseOver(answerIP: string) {
    const returnValue = await fetch("http://ip-api.com/json/" + answerIP)
      .then((resp) => resp.json())
      .then((userIPLocationData) => {
        //console.log("userIPLocationData", userIPLocationData);
        return userIPLocationData;
      });
    setIpInfo(await returnValue);
  }

  return (
    <>
      <span className="w-[200px]  grid place-items-center group ">
        <span
          className="w-[150px] h-[25px] bg-yellow-100 grid place-items-center text-yellow-700  hover:cursor-pointer hover:bg-yellow-500 hover:text-white text-sm rounded-full"
          onMouseOver={(e) => {
            handleMouseOver(answerIP);
          }}
        >
          {answerIP}
        </span>
        <HoverTooltip ipInfo={ipInfo} />
      </span>
    </>
  );
}

function HoverTooltip({ ipInfo }: any) {
  return (
    <div className="delay-150 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:bg-yellow-100  duration-1000  absolute mt-[100px] ml-[450px] w-[300px] p-4 rounded-2xl text-gray-800 border border-gray-300  shadow-lg py-2 z-10 ">
      {/* <p className="w-full border-0 block">{JSON.stringify(ipLocation)}</p> */}
      <span className="w-full border-0 block">
        {ipInfo.country} - {ipInfo.regionName}
      </span>
      <span className="w-full border-0 block">
        {ipInfo.city} - {ipInfo.zip}
      </span>
      <span className="w-full border-0 block">{ipInfo.timezone}</span>
      <span className="w-full border-0 block">{ipInfo.isp}</span>
    </div>
  );
}
