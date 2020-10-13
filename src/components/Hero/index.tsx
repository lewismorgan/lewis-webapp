import Avatar from 'components/Avatar';
import * as React from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import marsgfx from './mars.svg';

type HeroItem = {
  emoji: string;
  text: string;
};

const items: HeroItem[] = [
  { emoji: '🎓', text: 'Student - Graduates December 2020' },
  { emoji: '🛰', text: 'Space Enthusiast' },
  { emoji: '👽', text: 'Probably a Martian' },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeroProps {}

export default class Hero extends React.Component<HeroProps> {
  public render(): JSX.Element {
    const bullets: JSX.Element[] = [];

    items.forEach((value, _index) => {
      const emoji = value.emoji;
      const text = value.text;

      bullets.push(
        <li>
          <span className="emoji">{emoji}</span>
          <span>{text}</span>
        </li>,
      );
    });

    return (
      <div>
        <div className="hero">
          <div className="heroItems">
            <Avatar />
            <ul>{bullets}</ul>
          </div>
        </div>
        <Parallax y={[0, -100]}>
          <img src={marsgfx} alt="mars" className="mars" />
        </Parallax>
      </div>
    );
  }
}
