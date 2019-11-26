import Link from 'next/link';
import LandingLayout from '../layouts/LandingLayout';
import ParallaxHero from '../components/elements/parallaxHero';
import RichTextSection from '../components/elements/richTextSection';

const Index = _ => (
  <div>
    <LandingLayout>
      <ParallaxHero src="intersection.jpg" />
      <RichTextSection 
        heading="Welcome to Shohoney.io"
        body={`
          Thanks for stopping by.  While you're here, considering checking out my newest <a href="/blog">blog</a> post.
          <br/>  
          <br/>
          I'm a full-stack 
          <a href="//sitecore.com">
            Sitecore
          </a> 
          (.NET CMS) engineer for 
          <a href="//amfam.com">
            American Family Insurance
          </a>
          in Madison, WI. 
          <br/>
          <br/>
          This website is built using 
          <a href="//www.keystonejs.com">
            Keystone JS
          </a>
          , an aweomse NodeJS based CMS. Learn more about this site on the 
          <a href="/nuts-and-bolts">
            Nuts and Bolts
          </a>
          page.
        `}
      />
      <ParallaxHero src="intersection.jpg"/>
    </LandingLayout>
  </div>
);

export default Index;