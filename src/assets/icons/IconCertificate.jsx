// icon:certificate | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconCertificate(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M18 15 A3 3 0 0 1 15 18 A3 3 0 0 1 12 15 A3 3 0 0 1 18 15 z" />
      <path d="M13 17.5V22l2-1.5 2 1.5v-4.5" />
      <path d="M10 19H5a2 2 0 01-2-2V7c0-1.1.9-2 2-2h14a2 2 0 012 2v10a2 2 0 01-1 1.73M6 9h12M6 12h3M6 15h2" />
    </svg>
  );
}

export default IconCertificate;
