import React from "react";
import MakeItFair_Main from "./components/MakeItFair_Main";
import PosterSide from "./components/PosterSide";
import SideNavBar from "../common/components/SideNavBar";
import { fetch_answerList } from "../lib/lib";
import Script from "next/script";
import { revalidatePath } from "next/cache";

export default async function page() {
  const answerList = await fetch_answerList();

  revalidatePath("/makeItFair");

  return (
    <div className="w-screen h-screen border-0 border-red-400 flex flex-row bg-slate-100 p-6 space-x-5">
      <SideNavBar />
      <MakeItFair_Main answerList={answerList} />
    </div>
  );
}
