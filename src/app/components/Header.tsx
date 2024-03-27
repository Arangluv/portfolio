import * as style from "../styles/header.css";
import GithubIcon from "../../../public/assets/github.svg";
const Header = () => {
  return (
    <div className={style.header_wrapper}>
      <GithubIcon className={style.icon} />
    </div>
  );
};

export default Header;
