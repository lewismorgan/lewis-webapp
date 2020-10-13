/**
 *
 * Avatar
 *
 */
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarProps {}

export default class Avatar extends React.PureComponent<AvatarProps> {
  public render(): JSX.Element {
    return (
      <div className="avatar">
        <span className="avCircle">
          <span>👁‍</span>
        </span>
      </div>
    );
  }
}
