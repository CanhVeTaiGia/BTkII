import { CartType } from "../interface/interface";

interface Props{
    item: CartType
}
export const Cart: React.FC<Props> = ({item}) => {
  return (
    <>
      <div className="w-full flex mt-[20px] p-[10px] h-[120px] rounded-[3px] border-b-[3px]">
        <img
          className="h-[100%] w-[120px] rounded-[3px] border-[1px] p-[2px]"
          src={item.product.image}
        />
        <div className="ml-[10px] w-[100%] flex justify-center">
          <div className="w-[100%]">
            <h2 className="text-[20px] font-[600]">{item.product.name}</h2>
            <input defaultValue={0} min={0} type="number" className="mt-[5px] mb-[5px] w-[90px] text-center h-[30px] rounded-[5px] border-[1px]" />
            <p className="">Quantity: {item.quantity}</p>
          </div>
          <div className="w-[20%] items-end ml-[10px] p-[10px] flex justify-around flex-col">
            <p className="font-[600]">$ {item.product.price * item.quantity}</p>
            <button className="mt-[5px] mb-[5px] w-[90px] text-center h-[30px] rounded-[5px] border-[1px]">Update</button>
            <p className="text-[#07f] cursor-pointer">Remove</p>
          </div>
        </div>
      </div>
    </>
  );
};
