import Link from 'next/link';
import Header from '../../components/common/header';
import { Slider, Slide } from 'react-materialize';

export default function Index() {
  return (
    <div>
      <Header />

      <Slider
        fullscreen={false}
        options={{
          height: 600,
          indicators: false
        }}
      >
        <Slide image={<img src="madison-night.jpg" />}>

        </Slide>
      </Slider>
    </div>
  )
}