import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import UserIndex from "../../Components/UserIndex";
import Feedbacks from "../../Components/Feedbacks";
import Asignar from "../../Components/Asignar";
import Evalua from "../../Components/Evalua";
import MemberAsignados from "../../Components/MemberAsignados";

export default function Index() {
  const [option, setOption] = useState(1);
  return (
    <div className="w-full h-screen overflow-y-auto flex flex-row ">
      <Navbar changeOption={setOption} />
      <div className="ml-60 pt-10 w-full flex flex-col pb-20 overflow-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-neutral">
        {option === 1 && <UserIndex />}
        {option === 2 && <Feedbacks />}
        {option === 3 && <Asignar />}
        {option === 4 && <Evalua />}
        {option === 5 && <MemberAsignados />}
      </div>
      <div
        dataTooltipTarget="tooltip-default"
        type="button"
        onClick={() => {
          setOption(1);
        }}
        className="group bg-black h-20 w-20 fixed right-0 bottom-0 text-white flex items-center justify-center m-3 rounded-full font-bold text-4xl cursor-pointer active:scale-90 transition-all ease-in-out"
      >
        {option === 1 ? (
          <p>4.5</p>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        )}
        <div
          id="tooltip-default"
          role="tooltip"
          className="inline-block absolute invisible group-hover:visible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
        >
          Tooltip content
          <div className="tooltip-arrow" dataPopperArrow></div>
        </div>
      </div>
      <div
        className="fixed top-0 right-0 m-3 w-6 cursor-pointer"
        onClick={() => {
          setOption(1);
        }}
      >
        <span class="flex h-3 w-3 z-50 ">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <img
          className="w-full -translate-y-2 z-10 active:scale-90 transition-all ease-in-out"
          src="https://img.icons8.com/ios-glyphs/30/000000/appointment-reminders--v2.png"
        />
      </div>
    </div>
  );
}