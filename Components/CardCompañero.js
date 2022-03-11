import React from "react";

export default function CardCompañero({ num }) {
  return (
    <div className="  w-[300px] rounded-xl p-3 shadow-sm shadow-black text-black mx-20 my-10 ">
      <div className="flex flex-row space-x-8  items-center px-4">
        <img
          className="rounded-full border-4 border-white"
          src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
          width={80}
          height={80}
        />
        <p className="text-xl font-bold">Compañero {num}</p>
      </div>
      <button className="btn block mt-10 mb-2 mx-auto">
        Realizar evaluación
      </button>
    </div>
  );
}
