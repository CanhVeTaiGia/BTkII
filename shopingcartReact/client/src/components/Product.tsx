import { ProductType } from "../interface/interface";

interface Props {
  item: ProductType;
}
export const Product: React.FC<Props> = ({ item }) => {
  const handleAdd = () => {};
  return (
    <>
      <div className="w-full flex mt-[20px] border-[1px] h-[120px] rounded-[3px]">
        <img className="h-[100%] w-[120px] rounded-[3px]" src={item.image} />
        <div className="ml-[10px] w-[100%] flex justify-between">
          <div className="w-[100%]">
            <h2 className="text-[20px] font-[600]">Tiêu đề</h2>
            <p className="w-[100%] text-[12px] h-[60px]">{item.description}</p>
            <p className="font-[600]">Total: {item.stock}</p>
          </div>
          <div className="w-[20%] ml-[10px] p-[10px] flex justify-around flex-col">
            <input
              type="number"
              defaultValue={0}
              min={0}
              className="border-[1px] w-full h-[25px] outline-none text-center"
            />
            <p className="text-center">$ {item.price}</p>
            <button
              onClick={handleAdd}
              className="border-[1px] p-[3px] rounded-[5px] bg-[#08f] border-none text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
