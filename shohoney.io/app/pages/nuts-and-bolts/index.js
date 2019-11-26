import LandingLayout from '../../layouts/LandingLayout';
import { ParallaxHero, RichTextSection } from '../../components/elements';

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
          <Collapsible>
            <CollapsibleItem header="GraphQL Support">
              I think this is awesome.  KeystoneJS has fully adopted GraphQL to transport content.  I've long thought
              of trying to set up Sitecore to do exactly this.
              <br/>
              <br/>
              I wish I could talk more to about why I think this is cool, but I think that the KeystoneJS team did a better
              job at describing it. I highly recommend reading it, <a href="//www.keystonejs.com/guides/graphql-philosophy" target="_blank">here</a>
            </CollapsibleItem>
            <CollapsibleItem header="SQL and NoSQL Database Adapters">
              Keystone offers two adapters, as of writing this.  PostgreSQL and MongoDB are the currently supported
              database solutions.  The implemented adapters are 
              <a href="//www.keystonejs.com/keystonejs/adapter-mongoose/" target="_blank">
                Mongoose (for MongoDB)
              </a>
              and 
              <a href="//www.keystonejs.com/keystonejs/adapter-knex/" target="_blank">
                Knex.js (for PostgreSQL)
              </a>.
              <br />
              <br />
              Mongoose is specifically written for mongodb.  However, <a href="//knexjs.org" target="_blank">Knex.js</a> is a general SQL 
              adapter for Javascript.  As such, it seems completely reasonable that KeystoneJS could be forked to support additional SQL 
              databases.
            </CollapsibleItem>
            <CollapsibleItem header="Strong Support">
              First off, Keystone is not the new kid on the block. As of writing this, KeystoneJS is on v5.  Browsing their documentation, and 
              <a href="//github.com/keystonejs">
                GitHub
              </a>
              it's clear the project is alive, and well.
              <br/>
              <br/>
              Another amusing anecdote (looking at you, Weird Al), Keystone actually pushed their v5 version live, right in the middle of the night, when I was working
              on this project.  Getting to switch all of my package.json references to the non-alpha versions was pretty satisfying.
            </CollapsibleItem>
            <CollapsibleItem header="Containerized Apps">
              Okay, I think I'm describing that correctly.  Out of the box, using the quick start, you get an app that has an AdminUI and the GraphQL App. In theory,
              this could be used as a standalone back-end to some other client app.  However, Keystone also provides a few other 'Apps' that are OOTB, and don't require
              too much work to set up.
              <br/>
              <br/>
              The most basic of these, is the 
              <a href="//keystonejs.com/keystonejs/app-static/">
                Static App
              </a>.
              This app is exactly what it sounds like, an app that serves static assets to a client. Now Keystone isn't just a standalone backend.
              <br/>
              <br/>
              The next two are very similar, and will largely become a matter of taste. Keystone ships with support for 
              <a href="//www.keystonejs.com/keystonejs/app-next/">
                Next.js
              </a>
              and 
              <a href="//www.keystonejs.com/keystonejs/app-nuxt/">
                Nuxt.js
              </a>.
              As I said, I think the choice here is largely a matter of taste/interest.  I, personally, have been interested in learning React.  Given that,
              the Next.js app seemed to be a clear winner, for me.  In the future, I may experiment with running two apps within Keystone.  Maybe I'll
              expand on that and fork my own framework for Keystone, down the road.
            </CollapsibleItem>
            <CollapsibleItem header="Good Examples">
              When getting started with Keystone, I was really thankful for how many great blogs and examples had already been written. If you're interested
              in doing the same thing that I've done here, I highly recommend checking out these great resources.
              <br/>
              <br/>
              <a href="//auth0.com/blog/developing-web-apps-and-restful-apis-with-keystonejs/">
                Developing Web Apps and RESTful APIs with KeystoneJS 
              </a> by Prosper Otemuyiwa
              <br/>
              <a href="//medium.com/@victor36max/how-to-build-a-react-driven-blog-with-next-js-and-keystonejs-cae3cd9fb804">
                Build a React-driven blog with Next.js and KeystoneJS
              </a> by Victor Chan
              <br/>
              <a href="//github.com/keystonejs/keystone/tree/e502af66a5b97f2d39ad203cf0b152f6160ab028/demo-projects/blog">
                KeystoneJS Demo Blog
              </a> by KeystoneJS
            </CollapsibleItem>
          </Collapsible>
        `}
      />
      <ParallaxHero src="code.jpg" smaller title="Photo by Tracy Adams on Unsplash" />
      <RichTextSection heading="Next.js"
        body={`
          As I had previously stated, in the KeystoneJS section, the framework I chose to build the site on was, largely,
          a matter of preference. Since I had a great deal of interest in learning React, the Next.js app became a foregone
          conclusion. While satisfying my React itch, Next.js also had some other upsides:
          <Collapsible>
            <CollapsibleItem header="Widely Used">
              Next.js is used. A lot.  Like, A LOT. Just going to the Next.js 
              <a href="//nextjs.org/showcase" target="_blank">
                showcase
              </a>
              shows a ton of results.  I bet you can't scroll through it without finding a few sites that you use on a regular basis.
              <br/>
              <br/>
              Combine that with their 
              <a href="//github.com/zeit/next.js" target="_blank">
                GitHub
              </a> stats, and it becomes obvious that this framework is a titan.
            </CollapsibleItem>
            <CollapsibleItem header="Large Community">
              So, this kind of comes with the framework being pretty widely used.  The community, just for Next.js, is great.  However, an
              awesome side-effect of being centered around React is that it also benefits from all of the documentation, and user content
              for React.
              <br/>
              <br/>
              Now, I don't know if you have heard of <a href="//reactjs.org">React</a>, but it's a pretty big deal.
            </CollapsibleItem>
            <CollapsibleItem header="SSR (server-side rendering)">
              While some may be for or against this, I just like the idea of doing Javascript a different way. Especially for an experimentation platform, like this. Server-side
              rendered javascript is not something I have ever done before, and this seems like a perfect opportunity to do it.
            </CollapsibleItem>
            <CollapsibleItem header="Guided Learning">
              I'm a huge sucker for guided learning, and Next.js is no exception.  Head over to the 
              <a href="//nextjs.org/learn/basics/getting-started" target="_blank">
                Getting Started
              </a> 
              page, and link up your GitHub account. Earn points. Learn Next.js. Maybe get an award at the end? I don't know, I haven't finished it, but I plan to.  
            </CollapsibleItem>
          </Collapsible>
        `} />
      <ParallaxHero src="rainy-day-coding.jpg" smaller title="Photo by Tracy Adams on Unsplash" />
      <RichTextSection heading="Materialize CSS"
        body={`
          I mentioned earlier that I really like Google Material.  It's straight forward, and now very widely used.
          It's a simple concept, and when used appropriately, is really good for any web imlementation. I had
          originally planned on using Material-UI, but I felt that it was more app focused, rather than website 
          focused.  Perhaps that is a naive view, but Materialize just felt better to me.
          <br/>
          <br/>
          Materialize is really easy to use for prototyping. Simply include the compiled CSS and JS from a CDN, and boom,
          you're good to go. 
          <br/>
          <br/>
          Now, things are never truly that easy.  I wanted to change the base primary color of Materialize.  If you want to do
          that, you need to serve your own copy of the Materialize CSS file.  That can be accomplished by retaining a copy of
          the Sass files, and then compiling, and serving them, on your own. Next.js complicates that a little bit, and I'll write
          about it, and link it here, in the future.
          <br/>
          <br/>
          The next (phrasing) problem, is that Materialize has no concept of what React is, or what Next.js is.  Thankfully, 
          <a href="//github.com/react-materialize/react-materialize" target="_blank">
            React Materialize 
          </a>
          exists. It has solved all of my use cases, except for one, which I cannot expect it to solve.  When writing blog content,
          or static page content (such as this), I'm not making a Next.js component for each of these sections.  As such, when
          I try to use Material components, I have no way to initialize those via React Materialize.  
          <br/>
          <br/>
          For now, I'm just calling Materialize's 
          <a href="//materializecss.com/auto-init.html" target="_blank">
            AutoInit()
          </a> 
          function in the 
          <a class="test" href="//reactjs.org/docs/react-component.html">
            componentDidMount() 
          </a>
          lifecycle hook, in my _app.js file. It'll have to do for now, but I do
          want to write an imlementation for translating raw markup, or markdown, to React Materialize components.

        `} />
      <ParallaxHero src="code.jpg" smaller title="Photo by Tracy Adams on Unsplash" />
    </LandingLayout>
  )
}

export default Index;