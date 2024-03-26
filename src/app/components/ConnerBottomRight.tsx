const CornerBottomRight = ({ className }: { className: string }) => {
  return (
    <svg
      width="300"
      height="300"
      data-name="corner-bottom-right"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0" stopColor="#73D661" />
          <stop offset="0.5" stopColor="#73D661" />
          <stop offset="1" stopColor="#765B87" />
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
