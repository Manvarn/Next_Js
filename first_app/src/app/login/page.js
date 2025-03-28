"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login Page</h1>
      <p>This is the login page of the application.</p>
      <Link href={"/"} style={{ color: "Highlight" }}>
        Go to Home Page
      </Link>
      <br />
      <button
        onClick={() => router.push("/")}
        style={{
          color: "white",
          background: "lightgrey",
          borderRadius: "6px",
        }}
      >
        Go To Home Page
      </button>
      <br />
      <Link href={"/login/loginStudent"} style={{ color: "cadetblue" }}>
        Go to Login Student Page
      </Link>
      <br />
      <Link href={"/login/loginteacher"} style={{ color: "cadetblue" }}>
        Go to Login Teacher Page
      </Link>
      <br />
    </div>
  );
};

export default Login;
