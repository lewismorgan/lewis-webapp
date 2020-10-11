/**
 *
 * Avatar
 *
 */
import React from 'react';
import { styled } from 'stitches.config';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarProps {}

export default class Avatar extends React.PureComponent<AvatarProps> {
  public render(): JSX.Element {
    return (
      <div style={{ display: 'flex'}}>
        <Circle>
          <span style={{fontSize: '3.5rem'}}>👁‍</span>
        </Circle>
      </div>

    );
  }
}

const Circle = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
  backgroundColor: '#3d3d3d',
  width: '10rem',
  height: '10rem',
});
