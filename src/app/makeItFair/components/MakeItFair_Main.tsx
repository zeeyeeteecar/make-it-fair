"use client";
import React from "react";
import { pollData } from "../../lib/lib";
import Dashboard from "./Dashboard";
import { CiFaceSmile } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";

export default function MakeItFair_Main({ answerList }: any) {
  const [showModal_Show, setShowModal_Show] = React.useState(false);
  const handleOnClose = () => setShowModal_Show(false);

  const [stateAnswerList, setStateAnswerList] = React.useState<any>([]);

  return (
    <div className="w-full h-full flex flex-col space-y-4 text-slate-500">
      <Dashboard answerList={answerList} />
      {pollData.map((question: any, key: number) => {
        return (
          <>
            <div
              key={key}
              id="divQuestion1"
              className="w-[1100px]  border bg-white relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex flex-col items-center justify-between p-4"
            >
              <div className="w-full table-auto">
                <div className="w-full ">
                  <p className="block antialiased font-sans text-[20px] font-medium text-blue-gray-400 text-blue-700">
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

                      return (
                        <>
                          <div className="flex flex-row border-0 items-center gap-3">
                            <span className="text-blue-400">
                              <CiFaceSmile />
                            </span>

                            <span className="w-[1400px] block antialiased font-sans text-lg leading-normal text-blue-gray-900 border-0 ">
                              {eachAnswer.answerTitle}
                            </span>

                            <span className="text-xs text-slate-300">
                              <SlPeople />
                            </span>
                            <span className="w-[100px] block antialiased font-sans text-blue-gray-600 border-0 ">
                              {answerCount}
                            </span>

                            <span className="w-[100px] antialiased font-sans mb-1 block text-sm  text-blue-gray-600 border-0 text-right">
                              {widthPercent.toString() + " %"}
                            </span>

                            <div className="w-[200px] h-[10px] bg-slate-200 rounded-xl ">
                              <div
                                style={{ width: widthPercent + "%" }}
                                className="h-[10px] shadow-none  text-center whitespace-nowrap text-white justify-center bg-blue-600  rounded-lg rounded-lg`;
"
                              ></div>
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
