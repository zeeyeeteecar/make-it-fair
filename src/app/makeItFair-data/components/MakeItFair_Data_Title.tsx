import React from 'react'

import { pollData } from "../../lib/lib";

export default function MakeItFair_Data_Title() {
  return (
    <div className="w-full h-[50px]  flex flex-row items-center text-slate-400 font-semibold">
    <span className="w-[50px]">ID</span>
    <span className="w-[200px] grid place-items-center">IP</span>
    {pollData.map((question: any, key: number) => {
      return (
        <span className="w-[200px] grid place-items-center relative group">
          <p className=" grid place-items-center w-[100px] h-[25px] text-[15px] font-sans font-medium text-green-400 text-sm  rounded-full bg-lime-100 text-center hover:bg-green-700 hover:text-white hover:cursor-pointer">
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
  )
}
