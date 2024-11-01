import { memo, SVGProps } from 'react';

const ImageIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 164 136' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_74_1212'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={164}
      height={130}
    >
      <rect width={164} height={130} rx={9} fill='black' />
    </mask>
    <g mask='url(#mask0_74_1212)'>
      <path
        opacity={0.7}
        d='M-15.0187 166.163C-40.016 143.223 -4.94756 94.2081 14.2464 87.0183C33.4403 79.8285 51.4573 103.606 54.4886 140.127C57.5199 176.647 44.4174 212.082 25.2235 219.271C6.02961 226.461 9.9786 189.104 -15.0187 166.163Z'
        fill='#FF5ABD'
      />
      <path
        d='M231.119 61.3151C268.548 87.6465 225.363 175.394 199.472 193.265C173.581 211.136 145.772 181.036 137.36 126.033C128.947 71.0307 147.273 29.8442 170.263 9.54862C193.254 -10.7469 193.691 34.9837 231.119 61.3151Z'
        fill='#F24AA9'
        fillOpacity={0.95}
      />
      <path
        opacity={0.7}
        d='M158.5 71.0188C176.741 25.2691 197 102.802 197 142.009C197 181.216 179.763 213 158.5 213C137.237 213 120 181.216 120 142.009C120 102.802 140.259 116.768 158.5 71.0188Z'
        fill='#FF5ABD'
      />
    </g>
  </svg>
);

const Memo = memo(ImageIcon2);
export { Memo as ImageIcon2 };
