import React from "react";

const dat = [1, 2, 3, 4, 5, 7, 8];

export default function Asignar() {
  return (
    <>
      <h1 className="title -m-5">Asignar compañeros</h1>
      <div className=" flex mt-3 mx-auto w-full items-center justify-center">
        <input
          type="text"
          className="input-label ml-6 w-8/12 lg:w-4/12"
          placeholder="Nombre de tu compañero"
        />{" "}
        <span className="btn ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
      </div>
      <div className="flex flex-col justify-center mt-5 mx-auto w-3/4">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Compañero</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {dat.map((i) => (
                    <tr key={i} className="hover:bg-blue-400/20">
                      <td className="p-2 whitespace-nowrap  flex justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://emser.es/wp-content/uploads/2016/08/usuario-sin-foto.png"
                              width={40}
                              height={40}
                              alt="Burak Long"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            {`Compañero ${i}`}
                          </div>
                        </div>
                        <button
                          className={` ${i % 2 === 0 && "bg-neutral"} btn`}
                        >
                          Agregar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mx-auto space-x-2 w-3/4 lg:w-1/2  justify-between my-6">
        <button class="btn-border ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="h-8 w-8"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          Previous page
        </button>
        <button class="btn">
          Next page
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="h-8 w-8"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
