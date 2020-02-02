import Link from 'next/link';
import Header from '../../components/common/header';
import { Slider, Slide, Caption, Modal } from 'react-materialize';
import MaterialTimer from '../../components/timers/materialTimer';
import RichTextSection from '../../components/elements/richTextSection';

export default function Index() {
  return (
    <div>
      <style jsx>{`
        .slider {
          margin-top: -5px;
        }
        img {
          filter: blur(5px);
        }
        iframe {
          width: 800px;
        }
    `}</style>
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
              The countdown has started!
            </h3>
            <h5>
              July 17, 2021
            </h5>
            <h5>
              2:30PM CST
            </h5>
            <MaterialTimer targetDate={new Date("July 17, 2021 14:30:00")} />
          </Caption>
        </Slide>
      </Slider>

      <RichTextSection heading="Save the Date"
        body={`<a target="_blank" href="//calendar.google.com/event?action=TEMPLATE&tmeid=M3A3aTYxZTY4OWdpM2Fkc2EyaWkza3RtcHYgc2hvaG9uZXl3ZWRkaW5nQG0&tmsrc=shohoneywedding%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"></a>`} />

      <RichTextSection heading="Things to Do"
        body={`<ResponsiveIframe src="//www.google.com/maps/d/embed?mid=1uq9uI084zanYX8H5ZNPjLL8jkEJsiPdC" />`} />
    </div>
  )
}