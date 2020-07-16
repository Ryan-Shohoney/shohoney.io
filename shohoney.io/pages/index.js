import { Client, LinkResolver } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import HeadComponent from '../components/common/head/head.component';
import Header from '../components/common/header/header.component';



function Home({ pageData, headerData }) {
  return (
    <div>
      <HeadComponent data={pageData.data}/>
      <Header data={headerData}/>
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

  const headerResponse = await Client(ctx.req).getSingle('navigation');
  const pageData = data.results[0];
  const headerData = headerResponse.data;

  return { pageData, headerData }
}

export default Home;
