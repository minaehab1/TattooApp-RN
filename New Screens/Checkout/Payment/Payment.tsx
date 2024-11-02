import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CaretLeftIcon } from './CaretLeftIcon.js';
import { CheckEmpty } from './CheckEmpty/CheckEmpty.js';
import { EditIcon } from './EditIcon.js';
import { Ellipse178Icon2 } from './Ellipse178Icon2.js';
import { Ellipse178Icon } from './Ellipse178Icon.js';
import { EllipseIcon2 } from './EllipseIcon2.js';
import { EllipseIcon3 } from './EllipseIcon3.js';
import { EllipseIcon } from './EllipseIcon.js';
import { Group1196Icon } from './Group1196Icon.js';
import { Group1363Icon } from './Group1363Icon.js';
import { IconIonicIosCloseIcon2 } from './IconIonicIosCloseIcon2.js';
import { IconIonicIosCloseIcon3 } from './IconIonicIosCloseIcon3.js';
import { IconIonicIosCloseIcon } from './IconIonicIosCloseIcon.js';
import { Line1Icon } from './Line1Icon.js';
import { Line2Icon } from './Line2Icon.js';
import classes from './Payment.module.css';
import { PricetagOutlineIcon } from './PricetagOutlineIcon.js';
import { RadioBtn2Icon } from './RadioBtn2Icon.js';
import { RadioBtn3Icon } from './RadioBtn3Icon.js';
import { RadioBtnChecked2Icon } from './RadioBtnChecked2Icon.js';
import { Rectangle } from './Rectangle/Rectangle.js';

interface Props {
  className?: string;
}
/* @figmaId 40:1937 */
export const Payment: FC<Props> = memo(function Payment(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.paymentMethod}>
        <div className={classes.cardNumber}>
          <div className={classes.title}>1579</div>
          <div className={classes.title2}>✱✱✱✱ ✱✱✱✱ ✱✱✱✱</div>
        </div>
        <div className={classes.edit}>
          <EditIcon className={classes.icon2} />
        </div>
        <div className={classes.card}>
          <div className={classes.rectangle458}></div>
          <div className={classes.title3}>Card</div>
        </div>
        <div className={classes.title4}>Payment Method</div>
      </div>
      <div className={classes.shippingOptions}>
        <div className={classes.title5}>Shipping Options</div>
        <div className={classes.rectangle521}></div>
        <div className={classes.rectangle522}></div>
        <div className={classes.title6}>Standard</div>
        <div className={classes.title7}>Express</div>
        <div className={classes.title8}>FREE</div>
        <div className={classes.title9}>$12,00</div>
        <div className={classes.group1269}>
          <div className={classes.rectangle4582}></div>
          <div className={classes.title10}>5-7 days</div>
        </div>
        <div className={classes.group1270}>
          <div className={classes.rectangle4583}></div>
          <div className={classes.title11}>1-2 days</div>
        </div>
        <div className={classes.group1196}>
          <Group1196Icon className={classes.icon3} />
        </div>
        <div className={classes.deliveredOnOrBeforeThursday23A}>Delivered on or before Thursday, 23 April 2020</div>
        <CheckEmpty
          className={classes.checkEmpty}
          classes={{ ellipse178: classes.ellipse178 }}
          swap={{
            ellipse178: (
              <div className={classes.ellipse178}>
                <Ellipse178Icon className={classes.icon} />
              </div>
            ),
          }}
        />
      </div>
      <div className={classes.ellipse}>
        <EllipseIcon className={classes.icon4} />
      </div>
      <div className={classes._1D80DBF7EBFB4F9F9991CF1939F8FA}></div>
      <div className={classes._93F4CC70A7AA4DCA958954AEBF6195}></div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>Custom Tattoo Design</div>
      <div className={classes.title12}>$75.00</div>
      <div className={classes.ellipse2}>
        <EllipseIcon2 className={classes.icon5} />
      </div>
      <div className={classes.title13}>1</div>
      <div className={classes.ellipse3}>
        <EllipseIcon3 className={classes.icon6} />
      </div>
      <div className={classes._231B806F991C43A8A0EA7F82AB8D77}></div>
      <div className={classes._98576F0C6F34E058E3F2D9CD12D257}></div>
      <div className={classes.loremIpsumDolorSitAmetConsecte2}>Small Tattoo Session</div>
      <div className={classes.title14}>$170.00</div>
      <div className={classes.ellipse1782}>
        <Ellipse178Icon2 className={classes.icon7} />
      </div>
      <div className={classes.title15}>1</div>
      <div className={classes.group1363}>
        <Group1363Icon className={classes.icon8} />
      </div>
      <div className={classes.title16}>2</div>
      <div className={classes.title17}>Items</div>
      <div className={classes.image45}></div>
      <div className={classes.googlePay}>Google Pay</div>
      <div className={classes.image44}></div>
      <div className={classes.creditCard}>Credit Card</div>
      <div className={classes.payPal}>PayPal</div>
      <div className={classes.radioBtnChecked2}>
        <RadioBtnChecked2Icon className={classes.icon9} />
      </div>
      <div className={classes.radioBtn3}>
        <RadioBtn3Icon className={classes.icon10} />
      </div>
      <div className={classes.radioBtn2}>
        <RadioBtn2Icon className={classes.icon11} />
      </div>
      <div className={classes.container35}>
        <div className={classes.cart}>Payment</div>
        <button className={classes.iconButton7}>
          <div className={classes.caretLeft}>
            <CaretLeftIcon className={classes.icon12} />
          </div>
        </button>
      </div>
      <Rectangle className={classes.rectangle} />
      <div className={classes.ea69ef296a3f09becf86eec5921d6e}></div>
      <div className={classes.container65}>
        <div className={classes.discountApplied}>
          <div className={classes.rectangle3}></div>
          <div className={classes._5Discount}>5% Discount</div>
          <div className={classes.iconIonicIosClose}>
            <IconIonicIosCloseIcon className={classes.icon13} />
          </div>
        </div>
        <div className={classes.discountApplied2}>
          <div className={classes.rectangle32}></div>
          <div className={classes._5Discount2}>5% Discount</div>
          <div className={classes.iconIonicIosClose2}>
            <IconIonicIosCloseIcon2 className={classes.icon14} />
          </div>
        </div>
        <div className={classes.discountApplied3}>
          <div className={classes.rectangle33}></div>
          <div className={classes._5Discount3}>5% Discount</div>
          <div className={classes.iconIonicIosClose3}>
            <IconIonicIosCloseIcon3 className={classes.icon15} />
          </div>
        </div>
        <div className={classes.apply}>Apply</div>
        <button className={classes.button17}>
          <div className={classes.high}>Vouchers</div>
        </button>
        <div className={classes.enterDiscountCode}>Enter Discount Code</div>
        <div className={classes.pricetagOutline}>
          <PricetagOutlineIcon className={classes.icon16} />
        </div>
      </div>
      <div className={classes.container66}>
        <div className={classes.container53}>
          <div className={classes.checkout}>Pay</div>
        </div>
        <div className={classes._2450}>$36.75</div>
        <div className={classes._24502}>$208.25</div>
        <div className={classes.subtotal}>You Saved</div>
        <div className={classes.total}>Total</div>
        <div className={classes.line1}>
          <Line1Icon className={classes.icon17} />
        </div>
        <div className={classes._24503}>$245.00</div>
        <div className={classes.subtotal2}>Subtotal</div>
        <div className={classes.line2}>
          <Line2Icon className={classes.icon18} />
        </div>
      </div>
    </div>
  );
});
