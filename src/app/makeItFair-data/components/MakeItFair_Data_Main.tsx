import React from "react";
import moment from "moment-timezone"


export default function MakeItFair_Data_Main({ answerList }: any) {
  return (
    <div className="w-full h-full flex flex-col rounded-2xl p-4 bg-white">
      <div>MakeItFair_Data_Main</div>
      <div className="text-blue-500">{JSON.stringify(answerList)}</div>

      {answerList &&
        answerList.map((answer: any, key: number) => {

           const answerContent = answer.answer.substring(10) 
           const questionNo = answer.answer.substring(10) 
          return (
            <div
              key={key}
              className="h-[50px] border flex flex-row text-slate-500"
            >
              <span className="w-[50px]">{answer.ID}</span>
              <span className="w-[200px]">{answerContent}</span>
              <span className="w-[200px]">{answerContent}</span>
              <span className="w-[200px]">{answer.answerIP}</span>
              <span className="w-[200px]">{moment(answer.answerDateTime).format("YYYY-MM-DD HH:mm:ss")}</span>
              
              
            </div>
          );
        })}
    </div>
  );
}
