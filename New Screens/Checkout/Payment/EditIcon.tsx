import { memo, SVGProps } from 'react';

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_88_1190)'>
      <path
        d='M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z'
        fill='#6478F2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.70001 18.6894V21.5019H11.5125L19.8073 13.207L16.9949 10.3946L8.70001 18.6894ZM21.9823 11.0321C22.2748 10.7396 22.2748 10.2671 21.9823 9.97458L20.2273 8.21962C19.9348 7.92712 19.4623 7.92712 19.1698 8.21962L17.7973 9.59209L20.6098 12.4045L21.9823 11.0321H21.9823Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_88_1190'>
        <rect width={30} height={30} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(EditIcon);
export { Memo as EditIcon };
