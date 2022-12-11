import React from 'react';

import {SvgCss} from 'react-native-svg';

export const SecondsLogo = () => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63.386" height="62.056" viewBox="0 0 63.386 62.056">
  <defs>
    <filter id="Path_2" x="0" y="0" width="40.173" height="39.805" filterUnits="userSpaceOnUse">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feFlood flood-color="#fff" flood-opacity="0.659"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Path_3" x="23.211" y="22.242" width="40.175" height="39.814" filterUnits="userSpaceOnUse">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="1" result="blur-2"/>
      <feFlood flood-color="#fff" flood-opacity="0.659"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_16476" data-name="Group 16476" transform="matrix(0.966, -0.259, 0.259, 0.966, 0.227, 8.923)">
    <g transform="matrix(0.97, 0.26, -0.26, 0.97, 2.09, -8.68)" filter="url(#Path_2)">
      <path id="Path_2-2" data-name="Path 2" d="M389.024,174.277a3.692,3.692,0,0,1-.077.723l-4.484,20.683a2.271,2.271,0,0,1-.106.367,1.936,1.936,0,0,1-.077.222,3.374,3.374,0,0,1-3.134,2.141H364.377a3.368,3.368,0,0,1-3.365-3.365,3.375,3.375,0,0,1,3.365-3.356l14.069-.01,3.924-18.109a3.365,3.365,0,0,1,6.654.7Z" transform="matrix(0.97, -0.26, 0.26, 0.97, -389.95, -61.41)" fill="#fff"/>
    </g>
    <g transform="matrix(0.97, 0.26, -0.26, 0.97, 2.09, -8.68)" filter="url(#Path_3)">
      <path id="Path_3-2" data-name="Path 3" d="M412.534,211.646a3.358,3.358,0,0,1-3.365,3.365H395.11l-3.934,18.118a3.365,3.365,0,0,1-6.653-.714,3.686,3.686,0,0,1,.077-.714l4.494-20.693a2.3,2.3,0,0,1,.106-.366,2,2,0,0,1,.077-.222,3.365,3.365,0,0,1,3.134-2.141h16.759A3.362,3.362,0,0,1,412.534,211.646Z" transform="matrix(0.97, -0.26, 0.26, 0.97, -399.12, -69.17)" fill="#fff"/>
    </g>
  </g>
</svg>
`;

  return <SvgCss xml={xml} />;
};
