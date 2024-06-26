import Todos from "./components/Todos";

const App: React.FC = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <Todos></Todos>
      </div>
    </>
  );
};
export default App;
