import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse149Icon } from './Ellipse149Icon.js';
import { Group1353Icon } from './Group1353Icon.js';
import classes from './More.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse149?: ReactNode;
    group1353?: ReactNode;
  };
}
/* @figmaId 1:5 */
export const More: FC<Props> = memo(function More(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse149}>{props.swap?.ellipse149 || <Ellipse149Icon className={classes.icon} />}</div>
      <div className={classes.group1353}>{props.swap?.group1353 || <Group1353Icon className={classes.icon2} />}</div>
    </div>
  );
});
