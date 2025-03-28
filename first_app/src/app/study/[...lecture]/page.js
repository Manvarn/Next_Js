"use client";
import { useParams } from "next/navigation";

function Lecture() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Day of College : {params.lecture[0]}</h1>
      <h2>Lecture : {params.lecture[1]}</h2>
    </div>
  );
}

export default Lecture;
