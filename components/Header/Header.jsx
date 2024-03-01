import Link from "next/link";
import imgLogo from "@/assets/logo.png";
import style from "./Header.module.css";
import Image from "next/image";
import { MainHeaderBackground } from "../MainHeaderBackground/MainHeaderBackground";
import { NavLink } from "../NavLink/NavLink";

export const Header = () => {
  //2
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link className={style.logo} href="/">
          <Image src={imgLogo} alt="A plate with food on it" priority />
          Level Food
        </Link>
        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
