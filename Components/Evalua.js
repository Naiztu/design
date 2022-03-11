import React from "react";
import CardCompañero from "./CardCompañero";

const dat = [1, 2, 3, 4, 5, 6];
export default function Evalua() {
  return (
    <>
      <h1 className="title w-11/12 mx-auto">Evaluaciones pendientes</h1>
      <div className="w-11/12 items-center justify-center mx-auto flex flex-wrap mt-5">
        {dat.map((i) => (
          <CardCompañero key={i} num={i} />
        ))}
      </div>
    </>
  );
}
