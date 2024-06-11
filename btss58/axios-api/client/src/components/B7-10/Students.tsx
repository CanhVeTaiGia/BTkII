import AddStudent from "./AddStudent";
import DeleteStudent from "./DeleteStudent";
import UpdateStudent from "./UpdateStudent";

const Students = () => {
  return (
    <div>
      <AddStudent />
      <UpdateStudent />
      <DeleteStudent />
    </div>
  );
};

export default Students;