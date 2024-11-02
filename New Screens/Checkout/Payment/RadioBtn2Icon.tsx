import { memo, SVGProps } from 'react';

const RadioBtn2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 22.32C6.30041 22.32 1.67999 17.6996 1.67999 12C1.67999 6.30041 6.30041 1.67999 12 1.67999C17.6996 1.67999 22.32 6.30041 22.32 12C22.3138 17.697 17.697 22.3138 12 22.32ZM12 3.39999C7.25034 3.39999 3.39999 7.25034 3.39999 12C3.39999 16.7496 7.25034 20.6 12 20.6C16.7496 20.6 20.6 16.7496 20.6 12C20.5948 7.2525 16.7475 3.40521 12 3.39999Z'
      fill='#CBCBCB'
    />
  </svg>
);

const Memo = memo(RadioBtn2Icon);
export { Memo as RadioBtn2Icon };
