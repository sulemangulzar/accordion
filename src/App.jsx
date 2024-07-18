import React, { useState } from "react";
import { accordionData } from "./data";

const App = () => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  return (
    <>
      <div className="select-none bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen w-full bg-slate-950 pt-24">
        <div className="w-[350px] md:w-[500px] lg:w-[600px] min-h-[350px] bg-white mx-auto p-4 pb-12 rounded-lg">
          <h1 className="text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
            Accordion
          </h1>
          {accordionData.map((item) => {
            const { id, question, answer } = item;
            return (
              <div
                onClick={() => handleSelection(id)}
                id={id}
                key={id}
                className="px-4 pt-6 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-12">
                  <h2 className="text-xl font-medium">{question}</h2>
                  {selected === id ? (
                    <button className="text-xl ">-</button>
                  ) : (
                    <button className="text-xl ">+</button>
                  )}
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    selected === id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {selected === id && <p className="mt-2 ">{answer}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
