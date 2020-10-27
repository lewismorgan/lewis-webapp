import Button from 'components/Button';
import Hero from 'components/Hero';
import Stars from 'components/Stars';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: React.FunctionComponent<HomeProps> = _props => {
  return (
    <>
      <Stars />
      <div className="btn-bar">
        <Button icon="fa-github" url="https://github.com/lewismorgan" />
      </div>
      <Hero />
      <div className="footer" />
    </>
  );
};

export default Home;
