interface Props {
  totalCart: number;
}
export const CartFooter: React.FC<Props> = ({ totalCart }) => {
  return (
    <>
      <tfoot id="my-cart-footer">
        <tr>
          {totalCart ? (
            <>
              <td colSpan={4}>
                There are <b>2</b> items in your shopping cart.
              </td>
              <td colSpan={2} className="total-price text-left">
                {totalCart} USD
              </td>
            </>
          ) : (
            <td colSpan={4}>Empty product in your cart</td>
          )}
        </tr>
      </tfoot>
    </>
  );
};
