import * as React from 'react';

export interface ButtonProps {
  icon: string;
  url: string;
}

export default class Button extends React.Component<ButtonProps> {
  public render(): JSX.Element {
    return (
      <div className="btn">
        <a href={this.props.url}>
          <i className={`fab ${this.props.icon}`}></i>
        </a>
      </div>
    );
  }
}
