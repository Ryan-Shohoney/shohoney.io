import Head from 'next/head'
import { Client, LinkResolver } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';



function Home({ pageData}) {
  console.log(pageData.data.landing_blurb);
  return (
    <div className="container">
      <Head>
        <title>{pageData.data.page_title}</title>
        {pageData.data.metatags.map((mt, k) => <meta key={k} name={mt.metatag_name} content={mt.metatag_content} />)}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {RichText.render(pageData.data.landing_blurb, LinkResolver)}
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const data = await Client(ctx.req).query(
    [
      Prismic.Predicates.at('document.type', 'landing'),
      Prismic.Predicates.any('document.tags', ['Home'])
    ]);
  const pageData = data.results[0];
  console.log(pageData);
  return { pageData }
}

export default Home;
