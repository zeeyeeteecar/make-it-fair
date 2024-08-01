import React from "react";
import moment from "moment-timezone";
import { pollData } from "../../lib/data";
import MakeItFair_Data_Row from "./MakeItFair_Data_Row";
import MakeItFair_Data_Title from "./MakeItFair_Data_Title";

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
    <div className="w-[1500px] h-full flex flex-col rounded-2xl p-6 bg-white">
      {/* <div className="text-blue-500">{JSON.stringify(combined)}</div> */}

      <MakeItFair_Data_Title />
      <MakeItFair_Data_Row combined={combined} />
    </div>
  );
}
