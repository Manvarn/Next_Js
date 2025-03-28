import Link from "next/link";
import "./student.css";

const AboutStudent = () => {
  return (
    <div className="about-student-container">
      <h1>About Student</h1>
      <p>This is the about student page.</p>

      <Link href="/about" className="link">
        Go to About Page
      </Link>
    </div>
  );
};

export default AboutStudent;
