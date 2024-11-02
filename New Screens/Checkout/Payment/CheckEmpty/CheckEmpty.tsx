import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CheckEmpty.module.css';
import { Ellipse178Icon } from './Ellipse178Icon.js';

interface Props {
  className?: string;
  classes?: {
    ellipse178?: string;
    root?: string;
  };
  swap?: {
    ellipse178?: ReactNode;
  };
}
/* @figmaId 34:1051 */
export const CheckEmpty: FC<Props> = memo(function CheckEmpty(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.ellipse178 || ''} ${classes.ellipse178}`}>
        {props.swap?.ellipse178 || <Ellipse178Icon className={classes.icon} />}
      </div>
    </div>
  );
});
