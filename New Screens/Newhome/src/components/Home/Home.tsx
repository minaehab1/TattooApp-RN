import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Bubble1Icon } from './Bubble1Icon';
import { Bubble1Icon2 } from './Bubble1Icon2';
import { Bubble2Icon } from './Bubble2Icon';
import { Button } from './Button/Button';
import { ControlsIcon } from './ControlsIcon';
import { Ellipse149Icon } from './Ellipse149Icon';
import { Ellipse149Icon2 } from './Ellipse149Icon2';
import { Group1497Icon } from './Group1497Icon';
import { Group1497Icon2 } from './Group1497Icon2';
import { Group1497Icon3 } from './Group1497Icon3';
import { Group1497Icon4 } from './Group1497Icon4';
import { Group1497Icon5 } from './Group1497Icon5';
import classes from './Home.module.css';
import { ImageIcon } from './ImageIcon';
import { ImageIcon2 } from './ImageIcon2';
import { ImageIcon3 } from './ImageIcon3';
import { NotificationIcon } from './NotificationIcon';
import { Story_Story } from './Story_Story/Story_Story';

interface Props {
  className?: string;
}
/* @figmaId 51:1225 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.container50}>
        <button className={classes.button21}>
          <div className={classes.invite}>Invite</div>
        </button>
        <button className={classes.button22}>
          <div className={classes.redeem}>Redeem</div>
        </button>
        <div className={classes.container43}>
          <div className={classes.image4}></div>
        </div>
        <div className={classes.hiJodie}>Hi, Jodie</div>
        <div className={classes.youHave}>You have 13,000 points</div>
        <div className={classes.home}>Home</div>
      </div>
      <div className={classes.container45}>
        <div className={classes.image58}></div>
        <div className={classes.image64}></div>
        <div className={classes.image69}></div>
        <div className={classes.image66}></div>
        <div className={classes.image67}></div>
        <div className={classes.calculator}>Calculator</div>
        <div className={classes.booking}>Booking</div>
        <div className={classes.rewards}>Rewards</div>
        <div className={classes.home2}>Home</div>
        <div className={classes.cart}>Cart</div>
      </div>
      <div className={classes.announcement}>
        <div className={classes.rectangle}></div>
        <div className={classes.loremIpsumDolorSitAmetConsecte}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.
        </div>
        <div className={classes.title}>Announcement</div>
        <Button
          className={classes.button}
          classes={{ ellipse149: classes.ellipse149, arrow: classes.arrow }}
          swap={{
            ellipse149: (
              <div className={classes.ellipse149}>
                <Ellipse149Icon className={classes.icon} />
              </div>
            ),
          }}
        />
      </div>
      <div className={classes.myOrders}>
        <div className={classes.toRecieve}>
          <div className={classes.rectangle2}></div>
          <div className={classes.title2}>To Recieve</div>
        </div>
        <div className={classes.notification}>
          <NotificationIcon className={classes.icon8} />
        </div>
        <div className={classes.title3}>My Orders</div>
        <div className={classes.toPay}>
          <div className={classes.rectangle3}></div>
          <div className={classes.title4}>To Pay</div>
        </div>
        <div className={classes.toReview}>
          <div className={classes.rectangle4}></div>
          <div className={classes.title5}>To Review</div>
        </div>
      </div>
      <div className={classes.bigSaleBanner}>
        <div className={classes._249A28B43CF4A4685AA859C48A7FB5}></div>
        <div className={classes.dB257E4F2BDA4C3587693FC7BD8DA1}></div>
        <div className={classes.image}>
          <ImageIcon className={classes.icon9} />
        </div>
        <div className={classes.title6}>Big Sale</div>
        <div className={classes.title7}>
          <div className={classes.textBlock}>Happening </div>
          <div className={classes.textBlock2}>Now</div>
        </div>
        <div className={classes.upTo50}>Up to 50%</div>
        <div className={classes.controls}>
          <ControlsIcon className={classes.icon10} />
        </div>
      </div>
      <div className={classes.bigSaleBanner2}>
        <div className={classes._249A28B43CF4A4685AA859C48A7FB52}></div>
        <div className={classes.dB257E4F2BDA4C3587693FC7BD8DA12}></div>
        <div className={classes.image2}>
          <div className={classes.rectangle584}></div>
          <div className={classes.bubble1}>
            <Bubble1Icon className={classes.icon11} />
          </div>
          <div className={classes.bubble2}>
            <Bubble2Icon className={classes.icon12} />
          </div>
          <div className={classes.bubble12}>
            <Bubble1Icon2 className={classes.icon13} />
          </div>
          <button className={classes.button25}>
            <div className={classes.cancel}>Try Now</div>
          </button>
        </div>
        <div className={classes.title8}>Big Sale</div>
        <div className={classes.upTo502}>Or a consultation. Use your rewards to pay</div>
      </div>
      <div className={classes.bigSaleBanner3}>
        <div className={classes._249A28B43CF4A4685AA859C48A7FB53}></div>
        <div className={classes.dB257E4F2BDA4C3587693FC7BD8DA13}></div>
        <div className={classes.image3}>
          <ImageIcon2 className={classes.icon14} />
        </div>
        <div className={classes.title9}>Photo Tattoo Try On</div>
        <div className={classes.upTo503}>Check out our latest works and collections</div>
      </div>
      <div className={classes.bigSaleBanner4}>
        <div className={classes._249A28B43CF4A4685AA859C48A7FB54}></div>
        <div className={classes.dB257E4F2BDA4C3587693FC7BD8DA14}></div>
        <div className={classes.image5}>
          <ImageIcon3 className={classes.icon15} />
        </div>
        <div className={classes.title10}>Tattoo Cam Try On</div>
        <div className={classes.upTo504}>Check out our latest works and collections</div>
      </div>
      <div className={classes.gallery}>
        <div className={classes.gallery2}>Gallery</div>
        <Story_Story
          className={classes.story}
          classes={{
            bFC6A77AC42F4C07A26DE5583E7DD7: classes.bFC6A77AC42F4C07A26DE5583E7DD7,
            group1497: classes.group1497,
            E33D0844DAB44EFA053B38892EE591: classes.E33D0844DAB44EFA053B38892EE591,
            group14972: classes.group14972,
            _9BF6ACCF20464A0490CDF239CBF7AA: classes._9BF6ACCF20464A0490CDF239CBF7AA,
            _14D5128D5FFF4CD98A8113E840D05E: classes._14D5128D5FFF4CD98A8113E840D05E,
          }}
          swap={{
            group1497: (
              <div className={classes.group1497}>
                <Group1497Icon className={classes.icon2} />
              </div>
            ),
            group14972: (
              <div className={classes.group14972}>
                <Group1497Icon2 className={classes.icon3} />
              </div>
            ),
            group14973: <Group1497Icon3 className={classes.icon4} />,
            group14974: <Group1497Icon4 className={classes.icon5} />,
            group14975: <Group1497Icon5 className={classes.icon6} />,
          }}
        />
      </div>
      <div className={classes.bookingStatus}>
        <div className={classes.container48}>
          <div className={classes.dateNov152023ArtistAlexCarter}>Date: Nov 15, 2023</div>
          <button className={classes.button24}>
            <div className={classes.cancel2}>Cancel</div>
          </button>
          <div className={classes.upcomingAppointment}>Upcoming Appointment</div>
        </div>
        <div className={classes.container68}>
          <div className={classes.dateNov152023ArtistAlexCarter2}>Date: Dec 10, 2023</div>
          <button className={classes.button242}>
            <div className={classes.cancel3}>Cancel</div>
          </button>
          <div className={classes.upcomingAppointment2}>Upcoming Appointment</div>
        </div>
        <div className={classes.bookingStatus2}>Booking Status</div>
        <div className={classes.container69}>
          <div className={classes.dateNov152023ArtistAlexCarter3}>Date: Dec 10, 2023</div>
          <button className={classes.button243}>
            <div className={classes.cancel4}>Cancel</div>
          </button>
          <div className={classes.upcomingAppointment3}>Upcoming Appointment</div>
        </div>
      </div>
      <div className={classes.title11}>Hot</div>
      <div className={classes.rectangle5}></div>
      <div className={classes._4CAC4019DCCC40ED94E6B651202C1D}></div>
      <div className={classes.d1D72D4D1D49410C870A423B20DE97}></div>
      <div className={classes.title12}>Flash Sale: Up to 70% off</div>
      <div className={classes.rectangle6}></div>
      <div className={classes._73680F5B2A84C1D81C17C1E3FD66E1}></div>
      <div className={classes.aC1999D5B8AE43739F4E2709369408}></div>
      <div className={classes.title13}>New Designs: 2023 Collection</div>
      <div className={classes.rectangle7}></div>
      <div className={classes._6C8C60D67B344E6BA20955C995BFA3}></div>
      <div className={classes.e289A622DB6F493FB035DE553AA20D}></div>
      <div className={classes.title14}>New Designs: 2023 Collection</div>
      <div className={classes.rectangle8}></div>
      <div className={classes._5D096E88C6F4302A1BACDFDCFDA530}></div>
      <div className={classes._526227CBE83C4B8C91F99345C6B6EB}></div>
      <div className={classes.title15}>1780</div>
      <div className={classes.title16}>See All</div>
      <Button
        className={classes.button2}
        swap={{
          ellipse149: <Ellipse149Icon2 className={classes.icon7} />,
        }}
      />
      <div className={classes.title17}>Promotions</div>
    </div>
  );
});
