import React from "react";
import { SlPeople } from "react-icons/sl";
import { MdOutlineWhereToVote } from "react-icons/md";

export default function Dashboard({ answerList }: any) {
  const countVote = answerList.length;

  const combined = answerList.reduce((acc: any, obj: any) => {
    const existing = acc.find(
      (item: any) => item.answerDateTime === obj.answerDateTime
    );
    if (existing) {
      existing.value = [].concat(existing.value, obj.value);
    } else {
      acc.push({ ...obj, value: [obj.value] });
    }
    return acc;
  }, []);

  return (
    <div className="flex flex-row gap-6">
      <div className="w-[250px] h-[150px]  flex flex-row justify-center items-center border-0 gap-4 bg-white rounded-2xl">
        <div className="inline-flex flex-row items-center justify-center h-16 w-16 text-purple-600 text-2xl bg-purple-100 rounded-full ">
          <SlPeople />
        </div>
        <div className="flex flex-col">
          <span className="block w-[50px] text-3xl font-bold text-center ">
            {combined.length}
          </span>
          <span className="block w-[100px]  text-gray-500 text-sm">People</span>
        </div>
      </div>

      <div className="w-[250px] h-[150px]  flex flex-row justify-center items-center border-0 gap-4 bg-white rounded-2xl">
        <div className="inline-flex flex-row items-center justify-center h-16 w-16 text-green-600 text-2xl bg-green-100 rounded-full  font-light ">
          <MdOutlineWhereToVote />
        </div>
        <div className="flex flex-col">
          <span className="block w-[50px] text-3xl font-bold text-center ">
            {countVote}
          </span>
          <span className="block w-[100px]  text-gray-500 text-sm">
            Total Votes
          </span>
        </div>
      </div>
    </div>
  );
}
