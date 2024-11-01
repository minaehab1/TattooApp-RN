import { memo, SVGProps } from 'react';

const ControlsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 120 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={40} height={10} rx={5} fill='#607AFB' />
    <path
      opacity={0.2}
      d='M55 10C57.7614 10 60 7.76142 60 5C60 2.23858 57.7614 0 55 0C52.2386 0 50 2.23858 50 5C50 7.76142 52.2386 10 55 10Z'
      fill='#607AFB'
    />
    <path
      opacity={0.2}
      d='M75 10C77.7614 10 80 7.76142 80 5C80 2.23858 77.7614 0 75 0C72.2386 0 70 2.23858 70 5C70 7.76142 72.2386 10 75 10Z'
      fill='#607AFB'
    />
    <path
      opacity={0.2}
      d='M95 10C97.7614 10 100 7.76142 100 5C100 2.23858 97.7614 0 95 0C92.2386 0 90 2.23858 90 5C90 7.76142 92.2386 10 95 10Z'
      fill='#607AFB'
    />
    <path
      opacity={0.2}
      d='M115 10C117.761 10 120 7.76142 120 5C120 2.23858 117.761 0 115 0C112.239 0 110 2.23858 110 5C110 7.76142 112.239 10 115 10Z'
      fill='#607AFB'
    />
  </svg>
);

const Memo = memo(ControlsIcon);
export { Memo as ControlsIcon };
