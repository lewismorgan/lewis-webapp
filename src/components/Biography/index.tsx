/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BiographyProps {}

export default class Biography extends React.Component<BiographyProps> {
  public render(): JSX.Element {
    return (
      <Div>
        <p>
          Born in raised near St. Petersburg, Florida, I always found myself
          tinkering with technology more than playing in the sand (
          <i>It's rough and coarse, and gets everywhere...)</i> compared to my
          peers.
        </p>
        <p>
          My interest in programming first started to peak my curiousity when I
          helped work on an open-source emulator for the now shutdown MMORPG,{' '}
          <i>Star Wars: Galaxies</i> (SWG). Created by{' '}
          <i>Sony Online Entertainment</i>, today called <i>Daybreak Gaming</i>,
          SWG allowed players to create a character and establish their place in
          the <i>Star Wars</i> universe during the peak of the Galactic Civil
          War. During my time helping the project for a couple years, I was
          introduced to the concept of source control, learned principles behind
          OOP, internet packets, data types and their representation within
          packets, and how to send and create packets between a client and
          server using Java.
        </p>
        <p>
          After graduating from High School, I attended St. Petersburg College
          where I graduated in May of 2016 with an Associates in Arts. I then
          continued my education at the University of South Florida in Tampa,
          Florida, where I am currently working on earning my degree in Business
          Analytics & Information Systems.
        </p>
        <p>
          You'll probably find me in Cape Canaveral watching a rocket launch,
          Starbucks chatting with the baristas, or most likely Galaxy's Edge.
        </p>
      </Div>
    );
  }
}

const Div = styled.div`
  padding: 0 1rem 1rem 1rem;
`;
