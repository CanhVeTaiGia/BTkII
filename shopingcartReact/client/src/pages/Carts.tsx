import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../components/Cart";
import { CartHeader } from "../components/CartHeader";
import { CartType, RootState } from "../interface/interface";
import { useEffect } from "react";
import { getCart } from "../service/cart.service";

const Carts: React.FC = () => {
  const getData = useSelector((state: RootState) => state.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart())
  }, [])
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-[60%] rounded-[5px] p-[20px] border-[1px]">
          <CartHeader/>
          {
            getData.carts.map((item: CartType) => {
              return <Cart key={item.id} item={item} />
            }
          )}
        </div>
      </div>
    </>
  );
};
export default Carts;
