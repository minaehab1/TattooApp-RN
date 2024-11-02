import { memo, SVGProps } from 'react';

const RadioBtnChecked2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 1.67999C6.30041 1.67999 1.67999 6.30041 1.67999 12C1.67999 17.6996 6.30041 22.32 12 22.32C17.6996 22.32 22.32 17.6996 22.32 12C22.3138 6.30297 17.697 1.68615 12 1.67999ZM12 16.3C9.62517 16.3 7.69999 14.3748 7.69999 12C7.69999 9.62517 9.62517 7.69999 12 7.69999C14.3748 7.69999 16.3 9.62517 16.3 12C16.2971 14.3736 14.3736 16.2971 12 16.3Z'
      fill='#6478F2'
    />
  </svg>
);

const Memo = memo(RadioBtnChecked2Icon);
export { Memo as RadioBtnChecked2Icon };
