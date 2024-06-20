import { useDispatch } from "react-redux";
import { ProductCart, ProductInterface } from "../interface/interface";
import { action } from "../action/action";

interface Props {
  product: ProductInterface;
  handleSuccess: () => void
}
export const Product: React.FC<Props> = ({ product, handleSuccess }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    let newProductInCart: ProductCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    dispatch(action("DECREASESTOCK"), newProductInCart);
    dispatch(action("ADDTOCART", newProductInCart));

  };
  return (
    <>
      <div>
        <div className="media product">
          <div className="media-left">
            <a>
              <img
                className="media-object"
                src={`images/${product.image}`}
                alt="pizza"
              />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">Hamburger</h4>
            <p>{product.description}</p>
            <input
              className="py-[4px] px-[3px] border-[1px] outline-none cursor-default mb-[10px]"
              readOnly
              name="quantity-product-1"
              type="number"
              value={product.stock}
            />
            <a data-product={1} onClick={handleSuccess} className="price">
              {product.price} USD{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
