import { memo, SVGProps } from 'react';

const Bubble2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 280 257' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M227.424 92.3151C306.845 118.647 215.209 206.394 160.269 224.265C105.33 242.136 46.3217 212.036 28.4708 157.033C10.6199 102.031 49.5057 60.8442 98.2905 40.5486C147.075 20.2531 148.003 65.9837 227.424 92.3151Z'
      fill='#F27C4A'
      fillOpacity={0.95}
    />
  </svg>
);

const Memo = memo(Bubble2Icon);
export { Memo as Bubble2Icon };
