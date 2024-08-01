import React from "react";
import { CiEdit } from "react-icons/ci";
import { PiTrashThin } from "react-icons/pi";
import moment from "moment-timezone";
import { pollData } from "../../lib/data";
import MakeItFair_Data_Row_IPInfo from "./MakeItFair_Data_Row_IPInfo";

export default function MakeItFair_Data_Row({ combined }: any) {
  return (
    <div>
      {combined &&
        combined.map(async (answer: any, key: number) => {
          const result = pollData[2].question_Answer.filter(
            (obj: any) => obj.answerValue === answer.value[2]
          );

          const result_2 = result[0].answerTitle;

          return (
            <div
              key={key}
              className="h-[60px] border-t flex flex-row text-slate-500 items-center font-light hover:bg-slate-50"
            >
              <span className="w-[50px] ">{answer.ID}</span>
              <MakeItFair_Data_Row_IPInfo answerIP={answer.answerIP} />

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
