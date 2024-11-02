import { memo, SVGProps } from 'react';

const CaretLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.3248 21.0502C17.4003 21.1256 17.4602 21.2153 17.5011 21.3139C17.5419 21.4125 17.563 21.5182 17.563 21.625C17.563 21.7318 17.5419 21.8375 17.5011 21.9361C17.4602 22.0347 17.4003 22.1244 17.3248 22.1998C17.2494 22.2753 17.1597 22.3352 17.0611 22.3761C16.9625 22.4169 16.8568 22.438 16.75 22.438C16.6432 22.438 16.5375 22.4169 16.4389 22.3761C16.3403 22.3352 16.2506 22.2753 16.1752 22.1998L8.05016 14.0748C7.97461 13.9994 7.91468 13.9098 7.8738 13.8111C7.83291 13.7125 7.81186 13.6068 7.81186 13.5C7.81186 13.3932 7.83291 13.2875 7.8738 13.1889C7.91468 13.0902 7.97461 13.0006 8.05016 12.9252L16.1752 4.80016C16.3276 4.6477 16.5344 4.56205 16.75 4.56205C16.9656 4.56205 17.1724 4.6477 17.3248 4.80016C17.4773 4.95261 17.563 5.15939 17.563 5.375C17.563 5.59061 17.4773 5.79739 17.3248 5.94984L9.77367 13.5L17.3248 21.0502Z'
      fill='#313031'
    />
  </svg>
);

const Memo = memo(CaretLeftIcon);
export { Memo as CaretLeftIcon };