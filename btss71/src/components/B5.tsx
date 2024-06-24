import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../interface/interface";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { toggleMenu } from "../store/reducers/menuReducer";

export const B5: React.FC = () => {
  const menu = useSelector((state: RootType) => state.menuReducer);
  const dispatch = useDispatch();

  return (
    <div
      className={`p-[10px] bg-[#041021] text-white transition-all duration-300 ${
        menu.status ? "w-[120px]" : "w-[20px]"
      }`}
    >
      {menu.interface.map((item, index) => {
        const IconComponent = item.icon ? item.icon : "div";
        return (
          <div key={index} className={`h-[40px] flex `}>
            <IconComponent className="mr-[10px]" />
            {menu.status ? <p className="text-[12px]">{item.title}</p> : null}
          </div>
        );
      })}
      <div className={`h-[40px] flex`}>
        {menu.status ? (
          <LeftOutlined
            onClick={() => dispatch(toggleMenu())}
            className="mr-[10px] cursor-pointer"
          />
        ) : (
          <RightOutlined
            onClick={() => dispatch(toggleMenu())}
            className="cursor-pointer mr-[10px]"
          />
        )}
        {menu.status ? <p className="text-[12px]">Thu gọn</p> : null}
      </div>
    </div>
  );
};
