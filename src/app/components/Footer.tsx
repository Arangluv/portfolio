import * as style from '../styles/footer.css';

export default function Footer() {
  return (
    <div className={style.wrapper}>
      <span className={style.text}>Made with next.js and vanilla-extract</span>
      <span className={style.text}>&copy; 2024 Hyun SooRyu</span>
    </div>
  );
}
