import * as style from '../styles/header.css';
import GithubIcon from '../../../public/assets/github.svg';

export default function Header() {
  return (
    <div className={style.header_wrapper}>
      <a
        href="https://stackoverflow.com/questions/17952468/css-background-gradient-transition-not-working"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon className={style.icon} />
      </a>
    </div>
  );
}
