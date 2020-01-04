import Link from 'next/link';
import Header from '../../components/common/header';
import { Slider, Slide, Caption } from 'react-materialize';
import MaterialTimer from '../../components/timers/materialTimer';

export default function Index() {
  return (
    <div>
      <Header />

      <Slider
        fullscreen={false}
        options={{
          height: 600,
          indicators: false
        }}>
        <Slide image={<img src="madison-night.jpg" />}>
          <Caption placement="center">
            <h3>
              The countdown as started!
            </h3>
            <h5>
              July 17, 2021 
            </h5>
            <h5>
              2:30PM CST
            </h5>
            <MaterialTimer targetDate={new Date("July 17, 2021 14:30:00")}/>
          </Caption>
        </Slide>
      </Slider>
    </div>
  )
}