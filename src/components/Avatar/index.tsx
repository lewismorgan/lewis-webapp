/**
 *
 * Avatar
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAvatarProps {}

export default class Avatar extends React.PureComponent<IAvatarProps> {
  public render(): JSX.Element {
    return (
      <Container>
        <Circle>
          <Eye>👁‍</Eye>
        </Circle>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
`;

const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #3d3d3d;
  width: 10rem;
  height: 10rem;
`;

const Eye = styled.span`
  font-size: 3.5rem;
`;
