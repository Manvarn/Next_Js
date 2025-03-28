"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "./home.css";

function Home() {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  return (
    <div className="home-container">
      <h1>Basic Routing / Make New Page</h1>

      <Link href="/about" className="link">
        Go To About Page
      </Link>
      <br />

      <Link href="/login" className="link">
        Go To Login Page
      </Link>
      <br />
      <Link href="/studentlist" className="link">
        Go To Student List Page
      </Link>
      <br />

      <button onClick={() => navigate("/login")}>Go To Login Page</button>
      <button onClick={() => navigate("/about")}>Go To About Page</button>
    </div>
  );
}

export default Home;

// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// // import Image from "next/image";
// // import React from "react";
// // import { useState } from "react";

// // function Home() {
// //   return (
// //     <div>
// //       <h1>Hello NEXT JS</h1>
// //       <User name="Nikhil" />
// //     </div>
// //   );
// // }

// // const User = (props) => {
// //   return (
// //     <div>
// //       <h1>Hello {props.name}</h1>
// //     </div>
// //   );
// // };

// // export default Home;

// // function Home() {
// //   const [name, setName] = useState("Orange");
// //   const fruit = () => {
// //     // const fruit = (items) => {
// //     //   alert(items);
// //     setName("Apple");
// //   };

// //   const InnerComponent = () => {
// //     return <h1>Inner Component</h1>;
// //   };

// //   return (
// //     <div>
// //       <h1>Events , Function , State {name}</h1>
// //       <br />
// //       <br />
// //       <button
// //         onClick={() => fruit()}
// //         style={{
// //           background: "grey",
// //           borderRadius: "5px",
// //           padding: "10px",
// //           color: "white",
// //           cursor: "pointer",
// //         }}
// //       >
// //         Click Me
// //       </button>
// //       <br />
// //       <br />
// //       {/* <InnerComponent /> */}
// //       {/* jsx use nathi kari */}
// //       {/* InnerComponent() */}
// //       {/* jsx use kari */}
// //       {InnerComponent()}
// //     </div>
// //   );
// // }

// // export default Home;

// function Home() {
//   const router = useRouter();
//   const navigate = () => {
//     router.push("/login");
//     router.push("/about");
//   };
//   return (
//     <div>
//       <h1>Basic Routing / Make New Page</h1>
//       <Link href="/about" style={{ color: "Highlight" }}>
//         Go To About Page
//       </Link>
//       <br />
//       <Link href="/login" style={{ color: "Highlight" }}>
//         Go To Login Page
//       </Link>
//       <br />
//       {/* <button
//         onClick={() => navigate("/login")}
//         style={{
//           color: "white",
//           background: "lightgrey",
//           borderRadius: "6px",
//           marginRight: "10px",
//         }}
//       >
//         Go To Login Page
//       </button> */}
//       <button
//         onClick={() => router.push("/login")}
//         style={{
//           color: "white",
//           background: "lightgrey",
//           borderRadius: "6px",
//           marginRight: "10px",
//         }}
//       >
//         Go To Login Page
//       </button>
//       <button
//         onClick={() => navigate("/about")}
//         style={{
//           color: "white",
//           background: "lightgrey",
//           borderRadius: "6px",
//         }}
//       >
//         Go To About Page
//       </button>
//     </div>
//   );
// }

// export default Home;
