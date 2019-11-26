import Header from '../components/common/header';
const LandingLayout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default LandingLayout;