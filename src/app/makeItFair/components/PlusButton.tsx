"use client";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";

export default function PlusButton({ question }: any) {
  function handle_Click(e: any) {
    alert("ddd" + e.currentTarget.value);
  }
  return (
    <div>
      <button
        type="button"
        value={question.ID.toString() + "bb"}
        className="w-[30px] h-[30px] float-end  text-red-600 invisible group-[.peer:checked+&]:visible "
        onClick={(e) => handle_Click(e)}
      >
        <IoAddCircleOutline className="w-8 h-8" />{" "}
      </button>
    </div>
  );
}
