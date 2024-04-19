import * as style from '../styles/header.css';
import GithubIcon from '../../../public/assets/github.svg';
const Header = () => {
  return (
    <div className={style.header_wrapper}>
      <a
        href="https://stackoverflow.com/questions/17952468/css-background-gradient-transition-not-working"
        target="_blank"
      >
        <GithubIcon className={style.icon} />
      </a>
    </div>
  );
};

export default Header;
