import Link from "next/link";
import "./college.css";

const AboutCollege = () => {
  return (
    <div className="about-college-container">
      <h1>About College</h1>
      <p>This is the about college page.</p>

      <Link href="/about" className="link">
        Go to About Page
      </Link>
    </div>
  );
};

export default AboutCollege;
