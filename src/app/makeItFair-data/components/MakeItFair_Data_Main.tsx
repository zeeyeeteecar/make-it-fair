import React from "react";
import moment from "moment-timezone";
import { pollData } from "../../lib/lib";

export default function MakeItFair_Data_Main({ answerList }: any) {
  const combined = answerList.reduce((acc: any, obj: any) => {
    const existing = acc.find(
      (item: any) =>
        item.answerDateTime.toString() === obj.answerDateTime.toString()
    );
    if (existing) {
      existing.value = [].concat(existing.value, obj.answer);
    } else {
      acc.push({ ...obj, value: [obj.answer] });
    }
    return acc;
  }, []);

  return (
    <div className="w-full h-full flex flex-col rounded-2xl p-6 bg-white">
      {/* <div className="text-blue-500">{JSON.stringify(combined)}</div> */}

      <div className="w-full h-[50px]  flex flex-row items-center text-slate-400 font-semibold">
        <span className="w-[50px]">ID</span>
        <span className="w-[200px] grid place-items-center">IP</span>
        {pollData.map((question: any, key: number) => {
          return (
            <span className="w-[200px] grid place-items-center relative group">
              <p className=" grid place-items-center w-[100px] h-[25px] text-[15px] font-sans font-medium text-green-400 text-sm  rounded-full bg-lime-100 text-center ">
                Question {key + 1}
              </p>
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:bg-yellow-100 absolute mt-[200px] ml-[600px] w-[500px] bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg py-2 z-10">
                <p className="px-4 py-2">{question.question_Title}</p>

                {question.question_Answer.map((element: any) => {
                  return <li className="ml-[30px]">{element.answerTitle}</li>;
                })}
              </div>
            </span>
          );
        })}

        <span className="w-[200px] grid place-items-center">Date</span>
        <span className="w-[200px] grid place-items-center">Time</span>
      </div>

      {combined &&
        combined.map((answer: any, key: number) => {
          const result = pollData[2].question_Answer.filter(
            (obj: any) => obj.answerValue === answer.value[2]
          );
          const result_2 = result[0].answerTitle;

          return (
            <div
              key={key}
              className="h-[50px] border-t flex flex-row text-slate-500 items-center"
            >
              <span className="w-[50px] ">{answer.ID}</span>
              <span className="w-[200px]  grid place-items-center">
                {answer.answerIP}
              </span>
              <span className="w-[200px] grid place-items-center">
                {answer.value[0].substring(10)}
              </span>
              <span className="w-[200px] grid place-items-center">
                {answer.value[1].substring(10)}
              </span>
              <span className="w-[200px] grid place-items-center">
                {result_2}
              </span>
              <span className="w-[200px] grid place-items-center">
                {moment(answer.answerDateTime).utc(false).format("YYYY-MM-DD")}
              </span>
              <span className="w-[200px] grid place-items-center">
                {moment(answer.answerDateTime).utc(false).format("HH:mm:ss")}
              </span>
            </div>
          );
        })}
    </div>
  );
}
