import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button.module.css';
import { Ellipse149Icon } from './Ellipse149Icon.js';
import { IconMaterialEditIcon } from './IconMaterialEditIcon.js';

interface Props {
  className?: string;
  classes?: {
    ellipse149?: string;
    iconMaterialEdit?: string;
    root?: string;
  };
  swap?: {
    ellipse149?: ReactNode;
    iconMaterialEdit?: ReactNode;
  };
}
/* @figmaId 34:86 */
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.ellipse149 || ''} ${classes.ellipse149}`}>
        {props.swap?.ellipse149 || <Ellipse149Icon className={classes.icon} />}
      </div>
      <div className={`${props.classes?.iconMaterialEdit || ''} ${classes.iconMaterialEdit}`}>
        {props.swap?.iconMaterialEdit || <IconMaterialEditIcon className={classes.icon2} />}
      </div>
    </button>
  );
});
