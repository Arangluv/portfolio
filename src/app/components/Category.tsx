"use client";
import * as style from "../styles/category.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const Category = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div>아아아아아</div>;

  return (
    <ul className={style.wrapper}>
      <li onClick={() => setTheme("dark_1")} className={style.list_item}>
        <span className={style.list_text}>About Me</span>
      </li>
      <li onClick={() => setTheme("dark_2")} className={style.list_item}>
        <span className={style.list_text}>Skills</span>
      </li>
      <li className={style.list_item}>
        <span className={style.list_text}>Project</span>
      </li>
      <li className={style.list_item}>
        <span className={style.list_text}>Archiving</span>
      </li>
    </ul>
  );
};

export default Category;
