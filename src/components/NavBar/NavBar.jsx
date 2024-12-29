import React, { useState, useEffect } from "react";
import { Github, Menu, X } from "lucide-react";
import NavLogo from "/icons/nav-logo.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`${styles.navWrapper} ${isSticky ? styles.sticky : ""}`}>
      <nav className={styles.nav}>
        <a className={styles.logo} href="/">
          <img src={NavLogo} alt="GitSnap logo" width="100px" height="auto" />
        </a>

        <ul className={styles.menu}>
          <li>
            <a href="#about" className={styles.menuItem}>
              About
            </a>
          </li>
          <li>
            <a href="#features" className={styles.menuItem}>
              Features
            </a>
          </li>
          <li>
            <a
              href="https://github.com/frankiefab100/gitsnap/blob/main/CHANGELOG.md"
              className={styles.menuItem}
            >
              Changelog
            </a>
          </li>
        </ul>

        <div className={styles.menuRight}>
          <a
            className={styles.githubIcon}
            href="https://github.com/frankiefab100/gitsnap"
          >
            <Github />
          </a>
          {/* <span>4</span> */}

          <div className={styles.hamburgerIcon} onClick={handleMenu}>
            {showMenu ? <X alt="close menu" /> : <Menu alt="hamburger menu" />}
          </div>
        </div>
      </nav>

      {showMenu && (
        <div className={styles.mobileMenu}>
          <a
            href="#about"
            className={styles.mobileMenuItem}
            onClick={handleMenu}
          >
            About
          </a>
          <a
            href="#features"
            className={styles.mobileMenuItem}
            onClick={handleMenu}
          >
            Features
          </a>
          <a
            href="https://github.com/frankiefab100/gitsnap/blob/main/CHANGELOG.md"
            className={styles.mobileMenuItem}
            onClick={handleMenu}
          >
            Changelog
          </a>
        </div>
      )}
    </header>
  );
};

export default NavBar;
