import React from "react";
import { CiEdit } from "react-icons/ci";
import { PiTrashThin } from "react-icons/pi";
import moment from "moment-timezone";
import { pollData } from "../../lib/lib";

export default async function MakeItFair_Data_Row({ combined }: any) {
  const fun_ipLocation = async (answerIP: string) => {
    return await fetch("http://ip-api.com/json/" + answerIP)
      .then((resp) => resp.json())
      .then((userLocationData) => {
        console.log("userLocationData", userLocationData);
        return userLocationData;
      });
  };

  return (
    <div>
      {combined &&
        combined.map(async (answer: any, key: number) => {
          const result = pollData[2].question_Answer.filter(
            (obj: any) => obj.answerValue === answer.value[2]
          );

          const result_2 = result[0].answerTitle;

          //let data = await Promise(){};

          const ipLocation = await fun_ipLocation(answer.answerIP);
          console.log("ipLocation", ipLocation);

          return (
            <div
              key={key}
              className="h-[50px] border-t flex flex-row text-slate-500 items-center font-light hover:bg-slate-50"
            >
              <span className="w-[50px] ">{answer.ID}</span>
              <span className="w-[200px]  grid place-items-center group ">
                <span className="w-[150px] bg-yellow-100 grid place-items-center text-yellow-700  hover:cursor-pointer hover:bg-yellow-500 hover:text-white text-sm rounded-full">
                  {" "}
                  {answer.answerIP}
                </span>
                <HoverTooltip ipLocation={ipLocation} />
              </span>
              <span className="w-[200px] grid place-items-center">
                {answer.value[0].substring(10)}
              </span>
              <span className="w-[200px] grid place-items-center">
                {answer.value[1].substring(10)}
              </span>
              <span className="w-[400px] grid place-items-center">
                {result_2}
              </span>
              <span className="w-[200px] grid place-items-center">
                {moment(answer.answerDateTime).utc(false).format("YYYY-MM-DD")}
              </span>
              <span className="w-[200px] grid place-items-center">
                {moment(answer.answerDateTime).utc(false).format("HH:mm:ss")}
              </span>
              <span className="text-[24px] text-slate-200 hover:text-red-400 hover:cursor-pointer mr-6">
                <CiEdit />
              </span>
              <span className="text-[24px] text-slate-200 hover:text-red-400 hover:cursor-pointer">
                <PiTrashThin />
              </span>
            </div>
          );
        })}
    </div>
  );
}

function HoverTooltip({ ipLocation }: any) {
  return (
    <div className="delay-150 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:bg-yellow-100  duration-1000  absolute mt-[150px] ml-[450px] w-[300px] p-4 rounded-2xl text-gray-800 border border-gray-300  shadow-lg py-2 z-10 ">
      {/* <p className="w-full border-0 block">{JSON.stringify(ipLocation)}</p> */}
      <span className="w-full border-0 block">
        {ipLocation.country} - {ipLocation.regionName}
      </span>
      <span className="w-full border-0 block">
        {ipLocation.city} - {ipLocation.zip}
      </span>
      <span className="w-full border-0 block">{ipLocation.timezone}</span>
      <span className="w-full border-0 block">{ipLocation.isp}</span>
    </div>
  );
}
