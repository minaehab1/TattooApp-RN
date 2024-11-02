import { memo, SVGProps } from 'react';

const EllipseIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.593 23.1886C17.8474 23.1886 22.9175 18.1185 22.9175 11.8642C22.9175 5.60982 17.8474 0.539673 11.593 0.539673C5.3387 0.539673 0.268555 5.60982 0.268555 11.8642C0.268555 18.1185 5.3387 23.1886 11.593 23.1886Z'
      fill='#E5E8FC'
      stroke='white'
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(EllipseIcon2);
export { Memo as EllipseIcon2 };
