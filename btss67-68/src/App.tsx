// import { useEffect } from "react";
// import { books } from "./data/data";
import { Header } from "./components/Header";
import { BookList } from "./components/BookList";

export const App: React.FC = () => {
  // useEffect(() => {
  //   localStorage.setItem("books", JSON.stringify(books));
  // }, [books]);
  return (
    <>
      <div className="w-[100%] h-[100vh] px-[40px] pt-[10px]">
        <Header />
        <BookList />
      </div>
    </>
  );
};
