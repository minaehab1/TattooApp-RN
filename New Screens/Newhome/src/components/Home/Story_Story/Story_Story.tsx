import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Group1497Icon } from './Group1497Icon';
import { Group1497Icon2 } from './Group1497Icon2';
import { Group1497Icon3 } from './Group1497Icon3';
import { Group1497Icon4 } from './Group1497Icon4';
import { Group1497Icon5 } from './Group1497Icon5';
import classes from './Story_Story.module.css';

interface Props {
  className?: string;
  classes?: {
    bFC6A77AC42F4C07A26DE5583E7DD7?: string;
    group1497?: string;
    E33D0844DAB44EFA053B38892EE591?: string;
    group14972?: string;
    _9BF6ACCF20464A0490CDF239CBF7AA?: string;
    _14D5128D5FFF4CD98A8113E840D05E?: string;
    root?: string;
  };
  swap?: {
    group1497?: ReactNode;
    group14972?: ReactNode;
    group14973?: ReactNode;
    group14974?: ReactNode;
    group14975?: ReactNode;
  };
}
/* @figmaId 34:2726 */
export const Story_Story: FC<Props> = memo(function Story_Story(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes._2297D6F572754CEB9357D52DFC94FD}></div>
      <div
        className={`${props.classes?.bFC6A77AC42F4C07A26DE5583E7DD7 || ''} ${classes.bFC6A77AC42F4C07A26DE5583E7DD7}`}
      ></div>
      <div className={`${props.classes?.group1497 || ''} ${classes.group1497}`}>
        {props.swap?.group1497 || <Group1497Icon className={classes.icon} />}
      </div>
      <div className={classes._50124DB543D94D9A952FBC3A3375C7}></div>
      <div
        className={`${props.classes?.E33D0844DAB44EFA053B38892EE591 || ''} ${classes.E33D0844DAB44EFA053B38892EE591}`}
      ></div>
      <div className={`${props.classes?.group14972 || ''} ${classes.group14972}`}>
        {props.swap?.group14972 || <Group1497Icon2 className={classes.icon2} />}
      </div>
      <div className={classes.group14973}>{props.swap?.group14973 || <Group1497Icon3 className={classes.icon3} />}</div>
      <div className={classes._916F2B095F604C4C9F865005B027A0}></div>
      <div
        className={`${props.classes?._9BF6ACCF20464A0490CDF239CBF7AA || ''} ${classes._9BF6ACCF20464A0490CDF239CBF7AA}`}
      ></div>
      <div className={classes.group14974}>{props.swap?.group14974 || <Group1497Icon4 className={classes.icon4} />}</div>
      <div className={classes.b6288300D457487486FB1963B03748}></div>
      <div
        className={`${props.classes?._14D5128D5FFF4CD98A8113E840D05E || ''} ${classes._14D5128D5FFF4CD98A8113E840D05E}`}
      ></div>
      <div className={classes.group14975}>{props.swap?.group14975 || <Group1497Icon5 className={classes.icon5} />}</div>
      <div className={classes.baige}>
        <div className={classes.rectangle474}></div>
        <div className={classes.title}>Live</div>
      </div>
    </div>
  );
});
