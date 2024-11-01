import { memo, SVGProps } from 'react';

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z'
      fill='#08C514'
      stroke='white'
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(NotificationIcon);
export { Memo as NotificationIcon };
