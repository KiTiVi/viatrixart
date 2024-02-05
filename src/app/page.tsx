'use client';

import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  return (
    <Main>
      <div className="logo">
        <Image
          alt="Viatrix Art"
          src="/assets/logo_shadow.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2>Sidan är under uppbyggnad</h2>
      <div className="message">Under tiden kan ni nå mig här</div>
      <div className="links">
        <a className="link" href="https://www.facebook.com/viatrixsart">
          <Image
            alt="Viatrix Art"
            src="/assets/svg/fb.svg"
            height={32}
            width={32}
          />
          <span>viatrixsart</span>
        </a>
        <a className="link" href="https://www.instagram.com/viatrixart">
          <Image
            alt="Viatrix Art"
            src="/assets/svg/ig.svg"
            height={32}
            width={32}
          />
          <span>viatrixart</span>
        </a>
      </div>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  text-align: center;
  background: linear-gradient(
    -25deg,
    rgba(151, 0, 255, 1) 0%,
    rgba(255, 255, 255, 1) 40%,
    rgba(255, 255, 255, 1) 100%
  );

  .logo {
    height: 300px;
    position: relative;
  }

  h2 {
    margin-bottom: 8px;
  }

  .message {
    margin-bottom: 24px;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 150px;
    padding: 8px 12px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 4px;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
    margin-bottom: 16px;
    cursor: pointer;

    span {
      margin-left: 8px;
    }
  }
`;
