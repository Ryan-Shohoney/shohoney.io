import React from 'react';
import {
  Parallax
} from 'react-materialize';

class ParallaxHero extends React.Component {
  constructor(props) {
    super(props);
    this.size = props.smaller ? 'smaller': '';
    this.src = props.src;
    this.title = props.title;

    this.ref = React.createRef();
  }

  componentDidMount() {
    const M = require('materialize-css');
    M.Slider(this.ref, {});
  }

  render() {
    return (
      <div ref={this.ref}>
        <Parallax className={this.size} image={<img className='responsive-img' src={this.src} title={this.title}/> }/>
      </div>
    )
  }
}

export default ParallaxHero;