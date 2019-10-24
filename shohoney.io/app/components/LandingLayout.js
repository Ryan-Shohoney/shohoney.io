import Header from './header';

const LandingLayout = props => (
  <div>
    <Header />

    {props.children}
  </div>
);

export default LandingLayout;