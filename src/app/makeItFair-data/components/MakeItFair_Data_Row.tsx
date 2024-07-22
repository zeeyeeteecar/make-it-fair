import React from "react";
import { CiEdit } from "react-icons/ci";
import { PiTrashThin } from "react-icons/pi";
import moment from "moment-timezone";
import { pollData } from "../../lib/lib";

export default async function MakeItFair_Data_Row({ combined }: any) {
  return (
    <div>
      {combined &&
        combined.map((answer: any, key: number) => {
          const result = pollData[2].question_Answer.filter(
            (obj: any) => obj.answerValue === answer.value[2]
          );
          const result_2 = result[0].answerTitle;


          let ipLocation = null;
          const ipLocation = async () => {
            return await fetch("http://ip-api.com/json/24.80.82.223")
              .then((resp) => resp.json())
              .then((userLocationData) => {
                console.log("userLocationData", userLocationData);
                return userLocationData;
              });
          };

          return (
            <div
              key={key}
              className="h-[50px] border-t flex flex-row text-slate-500 items-center font-light hover:bg-lime-50"
            >
              <span className="w-[50px] ">{answer.ID}</span>
              <span className="w-[200px]  grid place-items-center group ">
                <span className="w-[150px] bg-yellow-100 grid place-items-center text-yellow-700 hover:bg-white hover:cursor-pointer hover:border-yellow-500 rounded-full">
                  {" "}
                  {answer.answerIP}
                </span>
                <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:bg-yellow-100 absolute mt-[250px] ml-[450px] w-[300px] rounded-2xl text-gray-800 border border-gray-300  shadow-lg py-2 z-10">
                  <p className="px-4 py-2">{ipLocation.country}</p>
                  <p className="px-4 py-2">{ipLocation.regionName}</p>
                  <p className="px-4 py-2">{ipLocation.city}</p>
                  <p className="px-4 py-2">{ipLocation.zip}</p>
                  <p className="px-4 py-2">{ipLocation.timezone}</p>
                  <p className="px-4 py-2">{ipLocation.isp}</p>
                </div>
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
