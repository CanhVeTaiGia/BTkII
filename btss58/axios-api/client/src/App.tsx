import GetAllStudents from "./components/B2";
import GetStudentById from "./components/B3";
import RemoveById from "./components/B4";
import CreateStudent from "./components/B5";

export default function App() {
  return (
    <div>
      <GetAllStudents></GetAllStudents>
      <GetStudentById />
      <RemoveById />
      <CreateStudent />
    </div>
  );
}
