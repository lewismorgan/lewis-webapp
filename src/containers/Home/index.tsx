import Hero from 'components/Hero';
import Stars from 'components/Stars';
import Workplaces from 'components/Workplaces';
import * as React from 'react';
import { Placeholder } from 'stitches.config';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: React.FunctionComponent<HomeProps> = _props => {
  return (
    <>
      <Stars />
      <Hero />
      {/* <Placeholder /> */}
      <Workplaces />
    </>
  );
};

export default Home;
