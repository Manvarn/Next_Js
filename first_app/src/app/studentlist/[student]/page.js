"use client";
function Student({ params }) {
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Student Name: {params.student}</h3>
    </div>
  );
}

export default Student;

// "use client";

// import { useRouter } from "next/navigation";

// function Student({ params }) {
//   const router = useRouter();
//   const { student } = params;

//   return (
//     <div>
//       <h1>Student Details</h1>
//       <h3>Student ID: {student}</h3>
//       <button onClick={() => router.push("/studentlist")}>Back to List</button>
//     </div>
//   );
// }

// export default Student;
