import Link from "next/link";
import React from "react";
import styles from "@/styles/components/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__links}>
        <li className={styles.navbar__link}>
          <Link className={styles.navbar__A} href="/">
            Home
          </Link>
        </li>
        <li className={styles.navbar__link}>
          <Link className={styles.navbar__A} href="/blog">
            Blog
          </Link>
        </li>
        <li className={styles.navbar__link}>
          <Link className={styles.navbar__A} href="/users">
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
