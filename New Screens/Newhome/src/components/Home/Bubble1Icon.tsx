import { memo, SVGProps } from 'react';

const Bubble1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 179 167' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.7}
      d='M26.5442 94.5589C-24.261 69.3953 45.484 19.1745 84.0271 12.3705C122.57 5.56653 159.325 31.3321 166.121 69.9195C172.917 108.507 147.181 145.304 108.638 152.108C70.0951 158.912 77.3494 119.723 26.5442 94.5589Z'
      fill='#FF915A'
    />
  </svg>
);

const Memo = memo(Bubble1Icon);
export { Memo as Bubble1Icon };
