/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react';
import Particles, { ISourceOptions } from 'react-tsparticles';
import particleOptions from './particles.json';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StarsProps {}

export default class Stars extends React.Component<StarsProps> {
  public render(): JSX.Element {
    return (
      <div className="stars">
        <Particles options={particleOptions as ISourceOptions} />
      </div>
    );
  }
}
