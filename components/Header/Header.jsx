import Link from "next/link";
import imgLogo from "@/assets/logo.png";
import style from "./Header.module.css";
import Image from "next/image";
import { MainHeaderBackground } from "../MainHeaderBackground/MainHeaderBackground";

export const Header = () => {
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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
