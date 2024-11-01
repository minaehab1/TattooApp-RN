import { memo, SVGProps } from 'react';

const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 348 136' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_74_1194'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={348}
      height={130}
    >
      <rect width={348} height={130} rx={9} fill='black' />
    </mask>
    <g mask='url(#mask0_74_1194)'>
      <path
        opacity={0.7}
        d='M-18.4558 162.559C-69.261 137.395 0.483974 87.1745 39.0271 80.3705C77.5702 73.5665 114.325 99.3321 121.121 137.919C127.917 176.507 102.181 213.304 63.6382 220.108C25.0951 226.912 32.3494 187.723 -18.4558 162.559Z'
        fill='#FFD471'
      />
      <path
        d='M490.424 61.3151C569.845 87.6465 478.209 175.394 423.269 193.265C368.33 211.136 309.322 181.036 291.471 126.033C273.62 71.0307 312.506 29.8442 361.29 9.54862C410.075 -10.7469 411.003 34.9837 490.424 61.3151Z'
        fill='#F1B11C'
      />
      <path
        opacity={0.7}
        d='M347.773 70.8741C381.348 25.1529 418.638 102.638 418.638 141.821C418.638 181.003 386.911 212.767 347.773 212.767C308.636 212.767 276.908 181.003 276.908 141.821C276.908 102.638 314.198 116.595 347.773 70.8741Z'
        fill='#FFD471'
      />
    </g>
  </svg>
);

const Memo = memo(ImageIcon);
export { Memo as ImageIcon };
