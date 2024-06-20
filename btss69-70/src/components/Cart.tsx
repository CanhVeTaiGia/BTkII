import { ProductCart } from "../interface/interface";

interface Props {
  cart: ProductCart;
  index: number;
}
export const Cart: React.FC<Props> = ({ cart, index }) => {
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{cart.name}</td>
        <td>{cart.price} USD</td>
        <td>
          <input name="cart-item-quantity-1" type="number" defaultValue={cart.quantity} />
        </td>
        <td>
          <a className="label label-info update-cart-item" data-product="">
            Update
          </a>
          <a className="label label-danger delete-cart-item" data-product="">
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};
