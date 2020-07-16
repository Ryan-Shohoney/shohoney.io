import { default as NextLink } from 'next/link';
import { LinkResolver, HrefResolver } from '../../../prismic-configuration';

function PrismicLink (props) {
  return (
    <NextLink as={LinkResolver(props.link)} href={HrefResolver(props.link)}>
      {props.children}
    </NextLink>
  )
}

export default PrismicLink