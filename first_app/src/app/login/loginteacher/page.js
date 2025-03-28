import Link from "next/link";
import "./loginteacher.css";

const LoginTeacher = () => {
  return (
    <div className="login-teacher-container">
      <h1>Login Teacher</h1>
      <p>This is the login page for teachers.</p>

      <Link href="/login" className="link">
        Go to Login Page
      </Link>
    </div>
  );
};

export default LoginTeacher;
