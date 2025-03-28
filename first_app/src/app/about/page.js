"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./about.css";

const About = () => {
  const router = useRouter();
  return (
    <div className="about-container">
      <h1>About</h1>
      <p>This is the about page of our application.</p>

      <Link href="/" className="link">
        Go to Home Page
      </Link>
      <br />

      <button onClick={() => router.push("/")}>Go To Home Page</button>
      <br />

      <Link href="/about/aboutcollege" className="link">
        Go to About College Page
      </Link>
      <br />

      <Link href="/about/aboutstudent" className="link">
        Go to About Student Page
      </Link>
      <br />
    </div>
  );
};

export default About;
