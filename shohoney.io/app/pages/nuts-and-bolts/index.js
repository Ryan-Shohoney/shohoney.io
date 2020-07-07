import LandingLayout from '../../layouts/LandingLayout';
import { ParallaxHero, RichTextSection } from '../../components/elements';
import {
  ExpansionPanel,
  ExpansionPanelSummary
} from '@material-ui/core';

const Index = _ => {

  return (
    <LandingLayout>
      <ParallaxHero src="rainy-day-coding.jpg" title="Photo by Tracy Adams on Unsplash" />
      <RichTextSection heading="The what"
        body={`
          I recently decided that it was time to create a space for me to experiement with different web technologies, and share that information with others.
          As an engineer, I rely on blogs and other community resources regularly.  Being an extensive CMS solution, Sitecore can become cumbersome to work with, 
          and sometimes the documentation is inadequate, or missing all together. Thankfully, the community has largely shouldered those short-comings.  The 
          great people that make up the Sitecore MVP (most valuable professional) community have been a huge resource over the years. I now feel that it's my turn
          to try and contribute back, where I can. As such, I built this site as an exercise for myself, and a portal for me to give back to the community.
          <br/>
          <br/>
          I could have probably stood up a nice blog on one of the many blogging platforms that are available. That said, I felt that doing so would rob me of an 
          opportunity to really branch out and try some new technologies.  Being the primary user, and administrator, I have a much greater interest in ensuring 
          that I build a user-friendly platform. It also gives me really fresh material to write about, to start getting comfortable with blogging.
        `} />
      <ParallaxHero src="code.jpg" smaller title="Photo by Tracy Adams on Unsplash" />
      <RichTextSection heading="The how"
        body={`
          At its core, this website is a 
          <a href="//nextjs.org" target="_blank">
            NextJS
          </a> 
          application that lives inside 
          <a href="//keystonejs.com" target="_blank">
            KeystoneJS
          </a>, a 
          <a href="//nodejs.org" target="_blank">
            NodeJS
          </a> 
          based 
          <a href="//en.wikipedia.org/wiki/Content_management_system" target="_blank">
            Content Management System (CMS)
          </a>.
          <br/>
          <br/>
          I've always been a fan of Google's Material Design, so I used
          <a href="//materializecss.com" target="_blank">
            Materialize CSS
          </a>
          as my CSS library.  I am, however, using the 
          <a href="//sass-lang.com" target="_blank">
            Sass 
          </a> 
          implementation of this library, so that I can make the customizations that I want. 
          <br/>
          <br/>
          I'm also using 
          <a href="//react-materialize.github.io/react-materialize" target="_blank">
            React Materialize
          </a>, 
          a React wrapper for Materialize CSS.
          <br/>
          <br/>
          Let's go ahead and break each of these things down.
        `} />
      <ParallaxHero src="rainy-day-coding.jpg" smaller title="Photo by Tracy Adams on Unsplash" />
      <RichTextSection heading="KeystoneJS"
        body={`
          How I chose KeystoneJS is a lot less interesting than I'd like to admit.  When I had decided I was going
          to start this project, I started off with a simple Google search,
          <a href="//lmgtfy.com/?q=best+node+js+cms" target="_blank">
            best node js cms
          </a>.
          Looking at the top several results, KeystoneJS is in the top 5, every time.  I started looking into it and, 
          immediately, felt like it was a good fit. A few things that really struck me:
        `}
      />

    </LandingLayout>
  )
}

export default Index;