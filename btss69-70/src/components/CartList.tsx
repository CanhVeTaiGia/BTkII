import { useSelector } from "react-redux";
import { Cart } from "./Cart";
import { CartFooter } from "./CartFooter";
import { ProductCart, RootType } from "../interface/interface";
import { useMemo } from "react";

export const CartList: React.FC = () => {
  const cartState: ProductCart[] = useSelector((state: RootType) => {
    return state.cartReducer;
  });
  const totalCart = useMemo(() => {
    return cartState.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="w-[4%]">STT</th>
            <th>Name</th>
            <th className="w-[15%]">Price</th>
            <th className="w-[4%]">Quantity</th>
            <th className="w-[25%]">Action</th>
          </tr>
        </thead>
        <tbody id="my-cart-body">
          {cartState.map((item, index) => {
            return <Cart key={index} cart={item} index={index}></Cart>;
          })}

          {/* <tr>
                        <th scope="row">2</th>
                        <td>Hamburger</td>
                        <td>15 USD</td>
                        <td>
                          <input
                            name="cart-item-quantity-1"
                            type="number"
                            defaultValue={32}
                          />
                        </td>
                        <td>
                          <a
                            className="label label-info update-cart-item"
                            data-product=""
                          >
                            Update
                          </a>
                          <a
                            className="label label-danger delete-cart-item"
                            data-product=""
                          >
                            Delete
                          </a>
                        </td>
                      </tr> */}
        </tbody>
        <CartFooter totalCart={totalCart} />
      </table>
    </>
  );
};
