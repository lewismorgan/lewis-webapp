import Avatar from 'components/Avatar';
import * as React from 'react';

type MastItem = {
  emoji: String;
  text: String;
};

var items: MastItem[] = [
  { emoji: '🎓', text: 'Student - Graduates in December 2020' },
  { emoji: '🛰', text: 'Space Enthusiast' },
  { emoji: '👽', text: 'Probably a Martian' },
];

export interface MastheadProps {}

export default class Masthead extends React.Component<MastheadProps> {
  public render(): JSX.Element {
    const bullets: JSX.Element[] = [];

    items.forEach((value, index) => {
      const emoji = value.emoji;
      const text = value.text;

      bullets.push(
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              fontSize: '1.25rem',
              padding: '0.1rem 0.5rem 0.1rem 0rem',
            }}>
            {emoji}
          </span>
          <span>{text}</span>
        </div>,
      );
    });

    return (
      <>
        <Avatar />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {bullets}
        </div>
      </>
    );
  }
}
