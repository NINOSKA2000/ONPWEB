import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/img/logo.jpg";
import Link from "next/link";
import styles from "../styles/nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Nav = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className={styles.nav}>
      <div>
        <Image src={logo} alt="logo" width={171} height={56} />
      </div>

      <div className={styles.nav_menu}>
        <ul >
          <li>
            <Link href="/">
              <a> Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Trámites y Citas</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.nav_buttom}>
        <div>Ir a ONP Datos</div>
        <div>Ir a ONP Cultura</div>
      </div>

      <button className={styles.nav_bars}>
        {/* onClick={(e)=>setOpen(!open)} */}
        <a href="#">
          <FontAwesomeIcon icon={faBars} />
        </a>
      </button>

      <div className={styles.nav_user}>
        <FontAwesomeIcon icon={faUser} />
        <span>Jose luis</span>
      </div>
    </nav>
  );
};

export default Nav;
