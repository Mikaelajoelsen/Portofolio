import "./header.css";
export default function Header() {
  return (
    <div className=" patterns">
      <svg width="100%" height="100%">
        <defs>
          <style>
            @import
            url(&quot;https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&quot;);
          </style>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#polka-dots)"
        ></rect>
        <text x="50%" y="60%" textAnchor="middle" fontFamily="Lora, serif">
          Hello, I am Mikaela Joelsen
        </text>
      </svg>
    </div>
  );
}
