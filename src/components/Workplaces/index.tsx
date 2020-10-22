import * as React from 'react';
import { styled } from 'stitches.config';

export interface WorkplacesProps {}

export default class Workplaces extends React.Component<WorkplacesProps> {
  public render(): JSX.Element {
    return (
      <div className="workplaces">
        <div className="workplace-card wc-front">
          <h1>SOFWERX</h1>
          <span>Computer Science Intern</span>
          <span>Tampa, FL</span>
          <Info>
            <span className="fas fa-info" style={{ marginTop: '5px' }} />
          </Info>
        </div>
        <div className="workplace-card wc-front">
          <h1>Raymond James</h1>
          <span>Intern - Financial Reporting</span>
          <span>St. Petersburg, FL</span>
          <Info>
            <span className="fas fa-info" style={{ marginTop: '5px' }} />
          </Info>
        </div>
      </div>
    );
  }
}

const Info = styled('div', {
  marginTop: '10px',
  backgroundColor: 'black',
  textAlign: 'center',
  borderRadius: '30px',
  width: '32px',
  height: '32px',
});
