import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../interface/interface";
import { HeartOutlined } from "@ant-design/icons";

export const B7: React.FC = () => {
  const favorites = useSelector((state: RootType) => state.favoritesReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[200px] p-[10px]">
        {favorites.map((item) => {
          return (
            <div key={item.id} className="w-[100%] border-[1px] border-black ">
              <p>Username: {item.name}</p>
              {item.status ? (
                <HeartOutlined className="text-red-500" />
              ) : (
                <HeartOutlined />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
