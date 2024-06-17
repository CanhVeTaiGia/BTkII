import { useSelector } from "react-redux";
import { ProfileInterface, RootType } from "../interface/interface";

export default function B1() {
  const profiles = useSelector((state: RootType) => {
    return state.profileReducer;
  });
  return (
    <>
      <div>
        {profiles.map((item) => {
          return (
            <div key={item.id}>
              <strong>Thông tin cá nhân</strong>
              <p>{item.name}</p>
              <p>{item.gender}</p>
              <p>{item.birthOfDate}</p>
              <p>
                {item.address.district}, {item.address.city}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
