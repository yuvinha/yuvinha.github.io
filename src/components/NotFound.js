import React from 'react';
import styled from 'styled-components/macro';
import useRainbow from 'hooks/useRainbow';

const INTERVAL_DELAY = 2000;
const StyledNotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);

  h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  a {
    color: inherit;
  }
`;

const NotFound = () => {
  const colors = useRainbow(INTERVAL_DELAY);
  const colorKeys = Object.keys(colors);

  return (
    <StyledNotFound
      style={{
        ...colors,
        transition: `
        ${colorKeys[0]} ${INTERVAL_DELAY}ms linear,
        ${colorKeys[1]} ${INTERVAL_DELAY}ms linear,
        ${colorKeys[2]} ${INTERVAL_DELAY}ms linear
      `,
        background: `
        radial-gradient(
          circle at top left,
          var(${colorKeys[2]}),
          var(${colorKeys[1]}),
          var(${colorKeys[0]})
        )
      `,
      }}
    >
      <div>
        <h1>Under construction</h1>
        <p>
          Coming soon with an interesting project. <br />
          In the mean time, please visit &#128073;{' '}
          <a href='https://yuvinha.com' rel='noreferrer' target='_blank'>
            yuvinha.com
          </a>
        </p>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;
