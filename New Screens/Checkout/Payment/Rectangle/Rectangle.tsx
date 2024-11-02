import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button } from '../Button/Button.js';
import { Ellipse149Icon } from './Ellipse149Icon.js';
import { IconMaterialEditIcon } from './IconMaterialEditIcon.js';
import classes from './Rectangle.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 38:1179 */
export const Rectangle: FC<Props> = memo(function Rectangle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <div className={classes._26DuongSo2ThaoDienWardAnPhuDis}>
        <div className={classes.textBlock}>+84932000000</div>
        <div className={classes.textBlock2}>amandamorgan@example.com</div>
      </div>
      <Button
        className={classes.button}
        classes={{ ellipse149: classes.ellipse149, iconMaterialEdit: classes.iconMaterialEdit }}
        swap={{
          ellipse149: (
            <div className={classes.ellipse149}>
              <Ellipse149Icon className={classes.icon} />
            </div>
          ),
          iconMaterialEdit: (
            <div className={classes.iconMaterialEdit}>
              <IconMaterialEditIcon className={classes.icon2} />
            </div>
          ),
        }}
      />
      <div className={classes.title}>Contact Information</div>
    </div>
  );
});
