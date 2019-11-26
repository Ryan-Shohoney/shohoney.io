import parser, { convertNodeToElement } from 'react-html-parser';
import Link from 'next/link';
import React from 'react';

const HtmlParserOptions = {
  transform: (node, idx) => {
    if (node.name == 'a') {
      // the key slug here seems hacky, but this whole concept is hacky too.....
      return (
        <Link key={idx} href={node.attribs.href}>
          {convertNodeToElement(node)}
        </Link>
      )
    }
  }
}

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
            {parser(this.body, HtmlParserOptions)}
          </div>
        </div>
      </div>
    )
  }
}


export default RichTextSection;