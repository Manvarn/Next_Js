import Link from "next/link";

function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href={"/studentlist/anil"}>Anil</Link>
        </li>
        <li>
          <Link href={"/studentlist/sam"}>Sam</Link>
        </li>
        <li>
          <Link href={"/studentlist/joy"}>Joy</Link>
        </li>
        <li>
          <Link href={"/studentlist/bruce"}>Bruce</Link>
        </li>
      </ul>
    </div>
  );
}

export default StudentList;

// import Link from "next/link";

// function StudentList() {
//   const students = [
//     { id: 1, name: "Anil" },
//     { id: 2, name: "Sam" },
//     { id: 3, name: "Joy" },
//     { id: 4, name: "Bruce" },
//   ];

//   return (
//     <div>
//       <h1>Student List</h1>
//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>
//             <Link href={`/studentlist/${student.id}`}>{student.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StudentList;
