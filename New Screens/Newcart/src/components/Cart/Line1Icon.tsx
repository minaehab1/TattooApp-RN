import { memo, SVGProps } from 'react';

const Line1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 336 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H336' stroke='#DEE1E6' />
  </svg>
);

const Memo = memo(Line1Icon);
export { Memo as Line1Icon };
