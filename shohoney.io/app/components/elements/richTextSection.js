import React from 'react';
import MaterialNodeParser from './lib/MaterialNodeParser';

class RichTextSection extends React.Component {
  constructor(props) {
    super(props);
    this.body = props.body;
    this.heading = props.heading;
  }

  render() {
    return (
      <div className="secion white">
        <div className="row container">
          <h2>
            {this.heading}
          </h2>
          <div>
            {MaterialNodeParser.parse(this.body)}
          </div>
        </div>
      </div>
    )
  }
}


export default RichTextSection;