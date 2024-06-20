import React from 'react';

const DeliveryIcon = ({ color = "#3F3E3F", width = 34, height = 25, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 34 25"
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M11 20h12m-12 0a3 3 0 1 1-6 0m6 0a3 3 0 1 0-6 0m18 0a3 3 0 1 0 6 0m-6 0a3 3 0 1 1 6 0M5 20h-.6c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C2 18.861 2 18.441 2 17.6v-1.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 11 5.12 11 6.8 11h18c1.115 0 1.672 0 2.139.074a6 6 0 0 1 4.987 4.987C32 16.528 32 17.085 32 18.2c0 .279 0 .418-.018.535a1.5 1.5 0 0 1-1.247 1.247c-.117.018-.256.018-.535.018H29M14 2v9m-9 0 .497-2.984c.357-2.137.535-3.206 1.068-4.008A4.5 4.5 0 0 1 8.47 2.394C9.35 2 10.432 2 12.6 2h5.047c1.409 0 2.113 0 2.752.194a4.5 4.5 0 0 1 1.55.83c.516.424.907 1.01 1.688 2.182L27.5 11"
      />
    </svg>
  );
};

export default DeliveryIcon;
