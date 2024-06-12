import React, { useState } from "react";

interface Button {
  id: number;
  name: string;
  isActive: boolean;
}
export default function TaskFilter() {
  const [buttons, setButtons] = useState<Button[]>([
    {
      id: 1,
      name: "Tất cả",
      isActive: true,
    },
    {
      id: 2,
      name: "Hoàn thành",
      isActive: false,
    },
    {
      id: 3,
      name: "Chưa hoàn thành",
      isActive: false,
    },
  ]);

  const handleClick = (id: number) => {
    setButtons(
      buttons.map((button) =>
        button.id === id
          ? { ...button, isActive: true }
          : { ...button, isActive: false }
      )
    );
  };
  return (
    <>
      <div className="w-[100%] border-[1px] shadow-md rounded-[5px] flex py-[20px] px-[40px] justify-around">
        {buttons.map((button) => {
          return button.isActive ? (
            <button
              key={button.id}
              onClick={() => handleClick(button.id)}
              className="p-[10px] border-[1px] text-white bg-blue-500 rounded-[5px]"
            >
              {button.name}
            </button>
          ) : (
            <button
              key={button.id}
              onClick={() => handleClick(button.id)}
              className="p-[10px] border-[1px] rounded-[5px]"
            >
              {button.name}
            </button>
          );
        })}
      </div>
    </>
  );
}
