import App from 'next/app';
import dynamic from 'next/dynamic';
import '../sass/materialize.scss';

//Pretty sure this breaks Next routing.
const DynamicMaterial = dynamic(_ => import('materialize-css/dist/js/materialize').then(_ => M.AutoInit()), {ssr: false}) ;

class BaseApp extends App {
  render () {
    const {Component, pageProps} = this.props;
    let material = '';
    if(process.browser) {
      material = <DynamicMaterial />;
    } 
    return (
     <div>
       {material}
       <Component {...pageProps} />
     </div>
    )
  }
}

export default BaseApp;