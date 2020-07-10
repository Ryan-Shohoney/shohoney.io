import { Client } from '../../../prismic-configuration';
import Head from 'next/head'
import Favicon from '../favicon/favicon.component';

function HeadComponent ({ data }) {
  return (
    <Head>
      <title>{data.page_title}</title>
      {data.metatags.map((mt, k) => <meta key={k} name={mt.metatag_name} content={mt.metatag_content} />)}
      <Favicon />
    </Head>
  );
}

export default HeadComponent;