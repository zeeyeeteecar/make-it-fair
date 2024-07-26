import React from "react";
import MakeItFair_Data_Main from "./components/MakeItFair_Data_Main";
import SideNavBar from "../common/components/SideNavBar";
import { fetch_answerList } from "../lib/lib";

export default async function page() {
  const answerList = await fetch_answerList();

  return (
    <div className="w-screen h-screen border-0 border-red-400 flex flex-row bg-slate-100 p-6 space-x-5">

      <SideNavBar />
      <MakeItFair_Data_Main answerList={answerList} />
    </div>
  );
}
