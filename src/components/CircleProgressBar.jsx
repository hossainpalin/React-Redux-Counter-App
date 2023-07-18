import React from 'react';
import { useSelector } from 'react-redux';

function CircleProgressBar() {
  const { count } = useSelector((state) => state);
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * count) / 100;

  return (
    <svg width={250} height={250} viewBox="0 0 200 200">
      <circle cx={100} cy={100} r={radius} fill="none" stroke="#ffffff45" strokeWidth={13} />
      <circle
        cx={100}
        cy={100}
        r={radius}
        fill="none"
        stroke="#ffffffa0"
        strokeWidth={13}
        style={{
          strokeDasharray: dashArray, strokeDashoffset: dashOffset, strokeLinecap: 'round', strokeLinejoin: 'round',
        }}
        transform="rotate(-90 100 100)"
      />
    </svg>
  );
}

export default CircleProgressBar;
