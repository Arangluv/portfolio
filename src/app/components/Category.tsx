"use client";
import * as style from "../styles/category.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Category = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      setTheme("dark_1");
    }
    if (pathname === "/skills") {
      setTheme("dark_2");
    }
    if (pathname === "/projects") {
      setTheme("dark_3");
    }
    if (pathname === "/archives") {
      setTheme("dark_4");
    }
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <div></div>;

  return (
    <ul className={style.wrapper}>
      <Link href="/" className={style.link}>
        <li onClick={() => setTheme("dark_1")} className={style.list_item}>
          <span className={style.list_text}>About Me</span>
        </li>
      </Link>
      <Link href="/skills" className={style.link}>
        <li onClick={() => setTheme("dark_2")} className={style.list_item}>
          <span className={style.list_text}>Skills</span>
        </li>
      </Link>
      <Link href="/projects" className={style.link}>
        <li onClick={() => setTheme("dark_3")} className={style.list_item}>
          <span className={style.list_text}>Project</span>
        </li>
      </Link>
      <Link href="/archives" className={style.link}>
        <li onClick={() => setTheme("dark_4")} className={style.list_item}>
          <span className={style.list_text}>Archiving</span>
        </li>
      </Link>
    </ul>
  );
};

export default Category;
