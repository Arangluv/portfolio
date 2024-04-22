import * as style from '../styles/header.css';
import GithubIcon from '../../../public/assets/github.svg';

export default function Header() {
  return (
    <div className={style.header_wrapper}>
      <a href="https://github.com/Arangluv" target="_blank" rel="noreferrer">
        <GithubIcon className={style.icon} />
      </a>
    </div>
  );
}
