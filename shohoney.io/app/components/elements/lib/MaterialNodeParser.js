import parse from 'html-react-parser';
import d2r from 'html-react-parser/lib/dom-to-react';
import normalizeHTMLWhitepace from 'normalize-html-whitespace';
import Link from 'next/link';
import Collapsible from 'react-materialize/lib/Collapsible';
import CollapsibleItem from 'react-materialize/lib/CollapsibleItem';

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
      case 'collapsible':
        console.log(node.children);
        return (
          <Collapsible>
            {d2r(node.children, parserOpts)}
          </Collapsible>
        );
      case 'collapsibleitem':
        return (
          <CollapsibleItem header={node.attribs.header}>
            {d2r(node.children, parserOpts)}
          </CollapsibleItem>
        );
    }
  } else if(node.type === 'text') {
    if(node.data === ' ') {
      node.data = '';
    }
  }
}

let parserOpts = {
  replace: replaceFn,
  normalizeWhitespace: true
}

function materialParse (htmlString) {
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