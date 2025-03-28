"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./login.css";

export function Layout({ children }) {
  const pathName = usePathname();
  console.log("Current Path:", pathName);

  return (
    <div className="layout-container">
      {
        // <h1>Common Layout for Login Screen</h1>
        pathName !== "/login/loginteacher" ? (
          <ul>
            <li>
              <Link href="/login">Login Main</Link>
            </li>
            <li>
              <Link href="/login/loginStudent">Student Login</Link>
            </li>
            <li>
              <Link href="/login/loginteacher">Teacher Login</Link>
            </li>
          </ul>
        ) : (
          <Link href={"/login"}>Go To Main Login Page</Link>
        )
      }

      <br />
      <br />
      {children}
    </div>
  );
}

export default Layout;
