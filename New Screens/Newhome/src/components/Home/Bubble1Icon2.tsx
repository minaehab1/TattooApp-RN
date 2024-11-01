import { memo, SVGProps } from 'react';

const Bubble1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 143 157' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.7}
      d='M71.7733 14.8741C105.348 -30.8471 142.638 46.638 142.638 85.8206C142.638 125.003 110.911 156.767 71.7733 156.767C32.6356 156.767 0.908264 125.003 0.908264 85.8206C0.908264 46.638 38.1982 60.5954 71.7733 14.8741Z'
      fill='#FF915A'
    />
  </svg>
);

const Memo = memo(Bubble1Icon2);
export { Memo as Bubble1Icon2 };
