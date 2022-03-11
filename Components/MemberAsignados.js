import React from "react";
import CardMembers from "./CardMembers";

const dat = [1, 2, 3, 4, 5, 6];

export default function MemberAsignados() {
  return (
    <>
      <h1 className="title w-11/12 mx-auto">Member&apos;s Asignados</h1>
      <div className="w-11/12 items-center justify-center mx-auto flex flex-wrap mt-5">
        {dat.map((i) => (
          <CardMembers key={i} num={i} />
        ))}
      </div>
    </>
  );
}
