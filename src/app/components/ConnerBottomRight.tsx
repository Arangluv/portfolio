import { stop_start, stop_end, stop_middle } from "../styles/main.css";

const CornerBottomRight = ({ className }: { className: string }) => {
  return (
    <svg
      data-name="corner-bottom-right"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={300}
      height={300}
    >
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop className={stop_end} offset="0" />
          <stop className={stop_middle} offset="0.55" />
          <stop className={stop_start} offset="1" />
        </linearGradient>
      </defs>
      <path
        fill="url('#grad2')"
        d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
      />
    </svg>
  );
};

export default CornerBottomRight;
