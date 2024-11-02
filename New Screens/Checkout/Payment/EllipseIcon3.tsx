import { memo, SVGProps } from 'react';

const EllipseIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 62 63' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30.885 62.0974C47.9422 62.0974 61.7699 48.2698 61.7699 31.2125C61.7699 14.1552 47.9422 0.327515 30.885 0.327515C13.8277 0.327515 0 14.1552 0 31.2125C0 48.2698 13.8277 62.0974 30.885 62.0974Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(EllipseIcon3);
export { Memo as EllipseIcon3 };
