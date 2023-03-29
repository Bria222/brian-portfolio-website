import { a, useSpring } from "@react-spring/web";
import React, { useEffect } from "react";

const initialStroke = (stroke: number) => ({
  strokeDasharray: stroke,
  strokeDashoffset: stroke,
});
const endStroke = () => ({
  strokeDashoffset: 0,
});

const Logo = () => {
  const cSpring = useSpring({
    from: initialStroke(151.3169403076172),
    to: endStroke(),
  });

  const [verticalHSpring, api1] = useSpring(() => ({
    ...initialStroke(83)
  }));

  const [curvedHSpring, api2] = useSpring(() => ({
    ...initialStroke(71.51106262207031),
  }));

  const [dotSpring, api3] = useSpring(() => ({
    y: -110,
    config: {
      tension: 200,
      friction: 15
    },
  }));

  useEffect(() => {
    setTimeout(() => {api1.start(endStroke())}, 300);
    setTimeout(() => {api2.start(endStroke())}, 500);
    setTimeout(() => {api3.start({ y: 0 })}, 700);
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="298.536" viewBox="0 0 400 298.536">
  <g transform="translate(-238.695 -107.379)"><text transform="translate(303 300)" fill="#3333ff" font-size="100" font-family="SegoeUI-Semibold, Segoe UI" font-weight="600">
      <tspan x="0" y="0">BN</tspan>
    </text>
    <path d="M435.651,850.174l126.064-68.158V637.388L437.036,563.135,310.695,632.124V776.474Z" transform="translate(-67 -450)" fill="none" stroke="#3333ff" stroke-width="15" />
  </g>
</svg>
  );
};

export default Logo;