import { memo, SVGProps } from 'react';

const IconMaterialEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.7 10.6892V13.5016H3.51245L11.8073 5.20678L8.99485 2.39433L0.7 10.6892ZM13.9823 3.03182C14.2748 2.73933 14.2748 2.26683 13.9823 1.97434L12.2273 0.219371C11.9348 -0.0731237 11.4623 -0.0731237 11.1698 0.219371L9.79734 1.59185L12.6098 4.4043L13.9823 3.03182H13.9823Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(IconMaterialEditIcon);
export { Memo as IconMaterialEditIcon };
