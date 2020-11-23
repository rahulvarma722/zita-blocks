import { useState, useRef, useEffect } from "@wordpress/element";

export const Piecircle = (props) => {
  // console.log(props);

  let {
    radius,
    strokeWidth,
    strokeBackground,
    strokeColor,
    fillColor,
    lineCap,
  } = props.canData;
  let { text, color, fontSize } = props.textData;
  // let totalDistance = radius + strokeWidth / 2;
  // let rectDimension = totalDistance * 2;
  // let ref = useRef();
  // let canFn_one = () => {
  //   let can2 = ref.current;
  //   let c = can2.getContext("2d");
  //   let percentTo = text;
  //   can2.width = rectDimension;
  //   can2.height = rectDimension;
  //   // circle which have fill color
  //   c.beginPath();
  //   c.arc(totalDistance, totalDistance, radius, 0, 2 * Math.PI, false);
  //   c.stroke();
  //   c.fillStyle = fillColor;
  //   c.fill();
  //   // background circle stroke
  //   c.beginPath();
  //   c.strokeStyle = strokeBackground;
  //   c.lineWidth = strokeWidth;
  //   c.arc(totalDistance, totalDistance, radius, 0, 2 * Math.PI);
  //   c.stroke();
  //   // second circle two according to input
  //   c.beginPath();
  //   if (lineCap) c.lineCap = "round";
  //   c.arc(
  //     totalDistance,
  //     totalDistance,
  //     radius,
  //     (Math.PI / 180) * 270,
  //     (Math.PI / 180) * (270 + (360 / 100) * percentTo)
  //   );
  //   c.strokeStyle = strokeColor;
  //   c.lineWidth = strokeWidth;
  //   c.stroke();
  // };
  // useEffect(canFn_one);
  let radiusApp = radius - (strokeWidth / 2);
  return (
    <div className="zita-block-pie-circle">
      <div className="pie-circle_">
        <span style={{ fontSize: fontSize, color: color }}>{text}%</span>
        <svg>
          <circle cx={radius} cy={radius} r={radius} fill={fillColor} />
          <circle
            r={radiusApp}
            cx={radius}
            cy={radius}
            stroke-width={strokeWidth}
            fill="none"
            stroke={strokeColor}
            stroke-linecap="round"
            stroke-dasharray="calc(40 * (3.1416 * 500)/100) calc(3.1416 * 500)"
          />
        </svg>
      </div>
    </div>
  );
};
