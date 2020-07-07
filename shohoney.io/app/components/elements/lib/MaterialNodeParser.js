import parse from 'html-react-parser';
import d2r from 'html-react-parser/lib/dom-to-react';
import normalizeHTMLWhitepace from 'normalize-html-whitespace';
import Link from 'next/link';
import Collapsible from 'react-materialize/lib/Collapsible';
import CollapsibleItem from 'react-materialize/lib/CollapsibleItem';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import ResponsiveIframe from '../responsiveIframe';

const replaceFn = (node) => {
  if (node.type === 'tag') {
    switch (node.name) {
      case 'a':
        return (
          <Link href={node.attribs.href}>
            <a>
              {d2r(node.children, parserOpts)}
            </a>
          </Link>
        );
      case 'expansionpanel':
        console.log(node.children)
        return (
          <ExpansionPanel>
            {d2r(node.children, parserOpts)}
          </ExpansionPanel>
        );
      case 'ExpansionPanelSummary':
        return (
          <ExpansionPanelSummary>
            {d2r(node.children, parserOpts)}
          </ExpansionPanelSummary>
        );
      case 'ExpansionPanelDetail':
        return (
          <ExpansionPanelDetails></ExpansionPanelDetails>
        );
      case 'responsiveiframe':
        return (
          <ResponsiveIframe src={node.attribs.src}>
            {d2r(node.children, parserOpts)}
          </ResponsiveIframe>
        );
    }
  } else if (node.type === 'text') {
    if (node.data === ' ') {
      node.data = '';
    }
  }
}

let parserOpts = {
  replace: replaceFn,
  normalizeWhitespace: true
}

function materialParse(htmlString) {
  return (
    <div>
      {parse(normalizeHTMLWhitepace(htmlString).trim(), parserOpts)}
    </div>
  )
};
const MaterialParser = {
  parse: materialParse
};
export default MaterialParser;