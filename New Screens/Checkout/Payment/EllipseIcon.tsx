import { memo, SVGProps } from 'react';

const EllipseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 62 63' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30.885 62.0442C47.9422 62.0442 61.7699 48.2165 61.7699 31.1592C61.7699 14.102 47.9422 0.274292 30.885 0.274292C13.8277 0.274292 0 14.102 0 31.1592C0 48.2165 13.8277 62.0442 30.885 62.0442Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(EllipseIcon);
export { Memo as EllipseIcon };
