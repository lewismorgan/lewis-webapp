import React from 'react';
import { styled } from 'stitches.config';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavBarProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function NavBar(props: NavBarProps): JSX.Element {
  return (
    <Wrapper>
      <Navigation>
        {/* TODO: Insert a image instead */}
        <Item href="/">Home</Item>
        <Item href="#projects">Projects</Item>
        <Item href="#resume">Resume</Item>
        <Item href="/contact">Contact</Item>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled('header', {
  height: '4rem',
  display: 'flex',
  top: 0,
  width: '100%',
  backgroundColor: '#3d3d3d',
  zindex: 2,
});

const Navigation = styled('nav', {
  display: 'flex',
});

const Item = styled('a', {
  display: 'flex',
  color: 'white',
  padding: '0.25rem 1rem',
  fontSize: '0.975rem',
  textDecoration: 'none',
  fontWeight: 500,
  alignItems: 'center',
  ':hover': {
    opacity: 0.8,
  },
});
