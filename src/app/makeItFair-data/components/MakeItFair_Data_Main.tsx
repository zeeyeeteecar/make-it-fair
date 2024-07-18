import React from "react";
import moment from "moment-timezone";

export default function MakeItFair_Data_Main({ answerList }: any) {
  const combined = answerList.reduce((acc: any, obj: any) => {
    const existing = acc.find((item: any) => item.answerIP === obj.answerIP);
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
        <span className="w-[200px] grid place-items-center">
          <p className=" grid place-items-center w-[100px] h-[25px] text-[15px] font-sans font-medium text-green-400 text-sm  rounded-full bg-lime-100 text-center ">
            Question 1
          </p>
        </span>
        <span className="w-[200px]  grid place-items-center">
          <p className=" grid place-items-center w-[100px] h-[25px] text-[15px] font-sans font-medium text-green-400 text-sm  rounded-full bg-lime-100 text-center ">
            Question 2
          </p>
        </span>
        <span className="w-[200px] grid place-items-center">
          <p className=" grid place-items-center w-[100px] h-[25px] text-[15px] font-sans font-medium text-green-400 text-sm  rounded-full bg-lime-100 text-center ">
            Question 3
          </p>
        </span>
        <span className="w-[200px] grid place-items-center">Date</span>
        <span className="w-[200px] grid place-items-center">Time</span>
      </div>

      {combined &&
        combined.map((answer: any, key: number) => {
          const answerContent = answer.answer.substring(10);
          const questionNo = answer.answer.substring(10);
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
                {answer.value[2].substring(10)}
              </span>
              <span className="w-[200px] grid place-items-center">
                {moment(answer.answerDateTime).format("YYYY-MM-DD")}
              </span>
              <span className="w-[200px] grid place-items-center">
                {moment(answer.answerDateTime).format("HH:mm:ss")}
              </span>
            </div>
          );
        })}
    </div>
  );
}
