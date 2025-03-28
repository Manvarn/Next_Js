import Link from "next/link";
import "./loginstudent.css";

const LoginStudent = () => {
  return (
    <div className="login-student-container">
      <h1>Login Student</h1>
      <p>Login page for students</p>

      <Link href="/login" className="link">
        Go to Login Page
      </Link>
    </div>
  );
};

export default LoginStudent;
