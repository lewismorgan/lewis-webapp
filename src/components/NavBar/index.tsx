import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavBarProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function NavBar(props: NavBarProps): JSX.Element {
  return (
    <Wrapper>
      <Navigation>
        <Item href="/">Home</Item>
        <Item href="#biography">Biography</Item>
        <Item href="#tech">Technologies</Item>
        <Item href="#projects">Projects</Item>
        <Item href="#resume">Resume</Item>
        <Item href="/contact">Contact</Item>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 0.1rem black;
  height: 4rem;
  display: flex;
  top: 0;
  width: 100%;
  background-color: #3d3d3d;
  z-index: 2;
`;

const Navigation = styled.nav`
  display: flex;
`;

const Item = styled.a`
  display: flex;
  color: white;
  padding: 0.25rem 1rem;
  font-size: 0.975rem;
  text-decoration: none;
  font-weight: 500;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;
