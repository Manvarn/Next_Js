import Link from "next/link";

function AboutNotFound() {
  return (
    <div>
      <p>The About page you are looking for does not exist.</p>
      <Link
        href={"/"}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Go To Home Page
      </Link>
    </div>
  );
}

export default AboutNotFound;
