import * as style from "../styles/category.css";

const Category = () => {
  return (
    <ul className={style.wrapper}>
      <li className={style.list_item}>
        <span className={style.list_text}>About Me</span>
      </li>
      <li className={style.list_item}>
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
