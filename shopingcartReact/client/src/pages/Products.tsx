import { useDispatch, useSelector } from "react-redux";
import { Product } from "../components/Product";
import { ProductHeader } from "../components/ProductHeader";
import { RootState } from "../interface/interface";
import { useEffect } from "react";
import { getProducts } from "../service/product.service";

const Products: React.FC = () => {
  const getData = useSelector((state: RootState) => state.products);
  console.log(getData.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return <>
    <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-[60%] rounded-[5px] p-[20px] border-[1px]">
            <ProductHeader/>
            {
              getData.products.map((item, index) => {
                return <Product key={index} item={item} />
              })
            }
        </div>
    </div>
  </>;
};
export default Products;