"use client";
import React from "react";
import { pollData } from "../lib/lib";

export default function MakeItFair_Main({ answerList }: any) {
  const [showModal_Show, setShowModal_Show] = React.useState(false);
  const handleOnClose = () => setShowModal_Show(false);

  const [stateAnswerList, setStateAnswerList] = React.useState<any>([]);

  return (
    <div className="w-full h-full flex flex-col space-y-4 text-slate-500">
      {pollData.map((question: any, key: number) => {
        return (
          <>
            <div
              key={key}
              id="divQuestion1"
              className="w-[1000px] h-[300px] border bg-white relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex flex-col items-center justify-between p-6"
            >
              <div className="w-full table-auto">
                <div className="w-full ">
                  <p className="block antialiased font-sans text-[20px] font-medium uppercase text-blue-gray-400">
                    --- Question {key + 1} --- {question.question_Title}
                  </p>
                </div>
                <div className="w-full p-4 space-y-2">
                  {question.question_Answer.map(
                    (eachAnswer: any, key: number) => {
                      const answerCount = answerList.filter(
                        ({ answer }: any) => answer === eachAnswer.answerValue
                      ).length;

                      const answerPercent: number =
                        (answerCount /
                          answerList.filter(({ answer }: any) =>
                            answer.includes("question1")
                          ).length) *
                        100;

                      const widthPercent = Math.round(answerPercent);
                      const percentBar = `${widthPercent} h-[10px] shadow-none  text-center whitespace-nowrap text-white justify-center bg-blue-600 border rounded-lg`;

                      return (
                        <>
                          <div className="flex flex-row border items-center">
                            <span className="w-[800px] block antialiased font-sans text-lg leading-normal text-blue-gray-900 font-semibold">
                              {eachAnswer.answerTitle}
                            </span>

                            <span className="w-[200px] block antialiased font-sans text-sm text-blue-gray-600">
                              {answerCount}
                            </span>

                            <span className="w-[60px] antialiased font-sans mb-1 block text-sm  text-blue-gray-600 border-0">
                              {widthPercent.toString() + " %"}
                            </span>

                            <div className="w-[200px] h-[10px] borde-2 bg-slate-200">
                              <div
                                style={{ width: widthPercent + "px" }}
                                className="h-[10px] shadow-none  text-center whitespace-nowrap text-white justify-center bg-blue-600 border rounded-lg`;
"
                              ></div>
                            </div>
                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                              <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"></div>
                            </div>
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </>
        );
      })}
      {/* {JSON.stringify(answerList)} */}
    </div>
  );
}
