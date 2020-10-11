import Avatar from 'components/Avatar';
import * as React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

// TODO: Paralalex effect between the different slides.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: React.FunctionComponent<HomeProps> = _props => {
  return (
    <>
      <Wrapper id="/">
        <FirstScroll>
          <Avatar />
          <Bullets>
            <Bullet>
              <Emoji>🎓</Emoji>
              <span>Student - Graduates December, 2020</span>
            </Bullet>
            <Bullet>
              <Emoji>🛰</Emoji>
              <span>Space Enthusiast</span>
            </Bullet>
            <Bullet>
              <Emoji>👽</Emoji>
              <span>Future Martian</span>
            </Bullet>
          </Bullets>
        </FirstScroll>
      </Wrapper>
    </>
  );
};

export default Home;

const Bullets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const Bullet = styled.div`
  display: flex;
  align-items: center;
`;

const Emoji = styled.span`
  font-size: 1.25rem;
  padding: 0.1rem 0.5rem 0.1rem 0rem;
`;

const Wrapper = styled.main`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FirstScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
