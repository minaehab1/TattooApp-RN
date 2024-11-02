import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse149Icon } from './Ellipse149Icon.js';
import classes from './Less.module.css';
import { Line97Icon } from './Line97Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse149?: ReactNode;
    line97?: ReactNode;
  };
}
/* @figmaId 1:2 */
export const Less: FC<Props> = memo(function Less(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse149}>{props.swap?.ellipse149 || <Ellipse149Icon className={classes.icon} />}</div>
      <div className={classes.line97}>{props.swap?.line97 || <Line97Icon className={classes.icon2} />}</div>
    </div>
  );
});
