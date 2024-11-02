import { memo, SVGProps } from 'react';

const IconMaterialEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.0635815 10.6892V13.5016H2.99357L11.6351 5.20678L8.70508 2.39433L0.0635815 10.6892ZM13.9009 3.03182C14.2056 2.73933 14.2056 2.26683 13.9009 1.97434L12.0726 0.219371C11.7679 -0.0731237 11.2757 -0.0731237 10.9709 0.219371L9.54111 1.59185L12.4711 4.4043L13.9009 3.03182H13.9009Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(IconMaterialEditIcon);
export { Memo as IconMaterialEditIcon };
