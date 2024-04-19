import * as style from '../styles/main.css';

export default function CornerTopLeft({ className }: { className: string }) {
  return (
    <svg
      width="300"
      height="300"
      data-name="corner-top-left"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop className={style.stop_start} offset="0" />
          <stop className={style.stop_middle} offset="0.5" />
          <stop className={style.stop_end} offset="1" />
        </linearGradient>
      </defs>
      <path
        fill="url('#grad1')"
        d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
      />
    </svg>
  );
}
