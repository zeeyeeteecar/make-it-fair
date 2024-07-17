import React from "react";
import Image from "next/image";

export default function PosterSide() {
  return (
    <div>
      <Image className=" rounded-2xl" src={"/header.png"} alt="poster" width={"800"} height={"800"} />
    </div>
  );
}
