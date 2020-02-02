import React from 'react';

class ResponsiveIframe extends React.Component {
  constructor(props) {
    super(props);
    this.src = props.src;
    this.DOM = React.createRef();
    this.state = {
      height: 0
    }
  }
  
  componentDidMount () {
    window.addEventListener('resize', this.updateHeight.bind(this));
    this.updateHeight();
  }

  updateHeight() {
    const elWidth = this.DOM.current.clientWidth;
    const height = elWidth * (9/16);
    this.setState({height: height});
  }

  render() {
    return (
      <div ref={this.DOM}>
        <style jsx>{`
          iframe {
            width: 100%;
            height: ${this.state.height}px;
          }
        `}</style>
        <iframe src={this.src}/>
      </div>
    )
  }
}

export default ResponsiveIframe;