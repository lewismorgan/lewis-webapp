import Avatar from 'components/Avatar';
import Masthead from 'components/Masthead';
import * as React from 'react';
import { styled } from 'stitches.config';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

// TODO: Paralalex effect between the different slides.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: React.FunctionComponent<HomeProps> = _props => {
  return (
    <>
      <Wrapper id="/">
        <Masthead />
      </Wrapper>
    </>
  );
};

export default Home;

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  lineHeight: '1',
  fontWeight: 500,
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '16px',
  paddingRight: '16px',
  border: '0',
});

const Wrapper = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '1rem',
});
