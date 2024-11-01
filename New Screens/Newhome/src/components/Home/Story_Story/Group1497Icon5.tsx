import { memo, SVGProps } from 'react';

const Group1497Icon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.5}
      d='M0 14.5C0 6.49187 6.49187 0 14.5 0V0C22.5081 0 29 6.49187 29 14.5V14.5C29 22.5081 22.5081 29 14.5 29V29C6.49187 29 0 22.5081 0 14.5V14.5Z'
      fill='#D9D9D9'
    />
    <g opacity={0.56} filter='url(#filter0_d_74_1268)'>
      <path
        d='M20.6959 12.868C21.8212 13.665 21.8212 15.335 20.6959 16.132L14.156 20.7645C12.8315 21.7027 11 20.7556 11 19.1324V9.86757C11 8.24444 12.8315 7.29733 14.156 8.23552L20.6959 12.868Z'
        fill='white'
      />
    </g>
    <defs>
      <filter
        id='filter0_d_74_1268'
        x={5}
        y={4.86407}
        width={22.5399}
        height={25.2719}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={3} />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.160784 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_74_1268' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_74_1268' result='shape' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Group1497Icon5);
export { Memo as Group1497Icon5 };
