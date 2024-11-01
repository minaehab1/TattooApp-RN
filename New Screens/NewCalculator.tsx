import { memo } from 'react';
import type { FC } from 'react';

import resets from './resets.module.css'; 
import { ArrowUpSIcon } from './ArrowUpSIcon';
import classes from './Calculator.module.css';
import { CaretSmUpIcon } from './CaretSmUpIcon';
import { CheckEmpty } from './CheckEmpty/CheckEmpty';
import { Ellipse178Icon } from './Ellipse178Icon';
import { EllipseIcon } from './EllipseIcon';
import { EllipseIcon2 } from './EllipseIcon2';
import { Group1196Icon } from './Group1196Icon';
import { Group1273Icon } from './Group1273Icon';
import { IconIonicIosCloseIcon } from './IconIonicIosCloseIcon';
import { IconIonicIosCloseIcon2 } from './IconIonicIosCloseIcon2';
import { IconIonicIosCloseIcon3 } from './IconIonicIosCloseIcon3';
import { PricetagOutlineIcon } from './PricetagOutlineIcon';

interface Props {
  className?: string;
}
/* @figmaId 45:1166 */
export const Calculator: FC<Props> = memo(function Calculator(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.container30}>
        <div className={classes.textbox2}>
          <div className={classes.showPriceBreakdown}>Show Price Breakdown</div>
          <div className={classes.arrowUpS}>
            <ArrowUpSIcon className={classes.icon2} />
          </div>
        </div>
        <div className={classes.totalHoursRatePerHour}>
          <div className={classes.textBlock}>Total Hours:</div>
          <div className={classes.textBlock2}>Rate per Hour:</div>
        </div>
        <div className={classes.estimateSummary}>Estimate Summary</div>
        <div className={classes.subtotalDiscount}>Subtotal:</div>
        <div className={classes.subtotalDiscount2}>Discount:</div>
        <div className={classes._20020}>$200</div>
        <div className={classes._200202}>$20</div>
        <div className={classes._180}>$180</div>
        <div className={classes.total}>Total:</div>
        <div className={classes._100}>$100</div>
        <div className={classes._1002}>5</div>
      </div>
      <div className={classes.container65}>
        <div className={classes.discountApplied}>
          <div className={classes.rectangle3}></div>
          <div className={classes._5Discount}>5% Discount</div>
          <div className={classes.iconIonicIosClose}>
            <IconIonicIosCloseIcon className={classes.icon3} />
          </div>
        </div>
        <div className={classes.discountApplied2}>
          <div className={classes.rectangle32}></div>
          <div className={classes._5Discount2}>5% Discount</div>
          <div className={classes.iconIonicIosClose2}>
            <IconIonicIosCloseIcon2 className={classes.icon4} />
          </div>
        </div>
        <div className={classes.discountApplied3}>
          <div className={classes.rectangle33}></div>
          <div className={classes._5Discount3}>5% Discount</div>
          <div className={classes.iconIonicIosClose3}>
            <IconIonicIosCloseIcon3 className={classes.icon5} />
          </div>
        </div>
        <div className={classes.apply}>Apply</div>
        <button className={classes.button17}>
          <div className={classes.high}>Vouchers</div>
        </button>
        <div className={classes.enterDiscountCode}>Enter Discount Code</div>
        <div className={classes.pricetagOutline}>
          <PricetagOutlineIcon className={classes.icon6} />
        </div>
      </div>
      <div className={classes.sizeSpecification}>
        <div className={classes.sizeSpecification2}>Size Specification</div>
        <div className={classes.height50Cm}>Height: 50 cm</div>
        <div className={classes.width50Cm}>Width: 50 cm</div>
        <div className={classes.slider1}>
          <div className={classes.frame}>
            <div className={classes.rectangle}></div>
          </div>
          <div className={classes.ellipse}>
            <EllipseIcon className={classes.icon7} />
          </div>
        </div>
        <div className={classes.slider12}>
          <div className={classes.frame2}>
            <div className={classes.rectangle2}></div>
          </div>
          <div className={classes.ellipse2}>
            <EllipseIcon2 className={classes.icon8} />
          </div>
        </div>
      </div>
      <div className={classes.detailsLevel}>
        <button className={classes.button14}>
          <div className={classes.low}>Low</div>
        </button>
        <button className={classes.button15}>
          <div className={classes.medium}>Medium</div>
        </button>
        <button className={classes.button16}>
          <div className={classes.high2}>High</div>
        </button>
        <div className={classes.detailsLevel2}>Details Level</div>
      </div>
      <div className={classes.container26}>
        <div className={classes.rectangle521}></div>
        <div className={classes.title}>Minimalist</div>
        <div className={classes.group1269}>
          <div className={classes.rectangle458}></div>
          <div className={classes.title2}>5-7 days</div>
        </div>
        <div className={classes.group1196}>
          <Group1196Icon className={classes.icon9} />
        </div>
        <div className={classes.rectangle524}></div>
        <div className={classes.title3}>Geometric</div>
        <div className={classes.group1272}>
          <div className={classes.rectangle4582}></div>
          <div className={classes.title4}>5-7 days</div>
        </div>
        <div className={classes.group1273}>
          <Group1273Icon className={classes.icon10} />
        </div>
        <div className={classes.rectangle523}></div>
        <div className={classes.title5}>Dotwork</div>
        <div className={classes.group1271}>
          <div className={classes.rectangle4583}></div>
          <div className={classes.title6}>1-2 days</div>
        </div>
        <CheckEmpty
          className={classes.checkEmpty}
          swap={{
            ellipse178: <Ellipse178Icon className={classes.icon} />,
          }}
        />
      </div>
      <div className={classes.textbox1}>
        <div className={classes.textfield}>
          <div className={classes.item1Item2}>Minimalist, Geometric</div>
          <div className={classes.caretSmUp}>
            <CaretSmUpIcon className={classes.icon11} />
          </div>
        </div>
        <div className={classes.styleSelection}>Style Selection</div>
      </div>
      <div className={classes.container63}>
        <div className={classes.finalPricingIsProvidedAfterCon}>
          Final pricing is provided after consulting with me for accuracy.
        </div>
        <div className={classes.image40}></div>
      </div>
    </div>
  );
});
