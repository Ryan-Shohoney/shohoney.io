import Link from 'next/link';
import Header from '../../components/common/header';
import MaterialTimer from '../../components/timers/materialTimer';
import { ParallaxHero } from '../../components/elements';
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

      <ParallaxHero src="madison-night.jpg" title="Madison Capitol building, at night">
        <MaterialTimer targetDate={new Date("July 17, 2021 14:30:00")} />
      </ParallaxHero>

      <RichTextSection heading="Save the Date"
        body={`<a target="_blank" href="//calendar.google.com/event?action=TEMPLATE&tmeid=M3A3aTYxZTY4OWdpM2Fkc2EyaWkza3RtcHYgc2hvaG9uZXl3ZWRkaW5nQG0&tmsrc=shohoneywedding%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"></a>`} />

      <RichTextSection heading="Things to Do"
        body={`<ResponsiveIframe src="//www.google.com/maps/d/embed?mid=1uq9uI084zanYX8H5ZNPjLL8jkEJsiPdC" />`} />
    </div>
  )
}