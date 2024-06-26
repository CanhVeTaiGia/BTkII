const Navbar: React.FC = () => {
  return (
    <>
      <div className="mt-[20px] w-[100%] flex gap-[10px] text-[16px] justify-between">
        <p className="text-[#08f] h-[30px] w-[150px] text-center border-[#08f] border-b-[2px]">
          Tất cả
        </p>
        <p className="h-[30px] w-[150px] text-center">Đã hoàn thành</p>
        <p className="h-[30px] w-[150px] text-center">Chưa hoàn thành</p>
      </div>
    </>
  );
};
export default Navbar;
