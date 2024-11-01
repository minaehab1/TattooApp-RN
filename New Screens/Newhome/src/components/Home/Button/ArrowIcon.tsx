import { memo, SVGProps } from 'react';

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.67162 0.295L7.49196 1.49874L11.2476 5.14604H0.0889997V6.83127H11.2476L7.49196 10.4786L8.67162 11.6823L14.5458 5.98866L8.67162 0.295Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(ArrowIcon);
export { Memo as ArrowIcon };
