import {
  Parallax
} from 'react-materialize';
const ParallaxHero = props => {
  return (
    <div>
      <Parallax className={props.smaller ? 'smaller': ''} image={<img className={`responsive-img`} src={props.src} title={props.title}/> }/>
    </div>
  )
}

export default ParallaxHero;